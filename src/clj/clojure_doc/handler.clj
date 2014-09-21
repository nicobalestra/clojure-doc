(ns clojure-doc.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as resp]
            [net.cgrand.enlive-html :as html]
            ))

(comment (defonce doc-url "http://clojure.github.io/clojure/clojure.core-api.html"))
(defonce doc-url (str "file:///" (.. (java.io.File. ".") getCanonicalPath) "/cljAPI.html"))
(def html-doc (atom 0)) ;This holds the doc-url html


(defn- fetch-url [url]
  (html/html-resource (java.net.URL. url)))


(defn- init-doc []
  (swap! html-doc (fn [curr] (fetch-url doc-url))))


(defn- build-doc-id-str [api]
  (str "clojure.core/" api))

(defn- build-doc-id [api]
  (keyword (str "#" (build-doc-id-str api))))


(defn- get-h2-id [node]
  (->
   node
   (html/select [:h2])
   first
   (html/attr-values :id)
   first))

(defn get-var-usage [node]
  (-> node
      (html/select [:#var-usage])
      first
      (html/text)))

(defn get-var-docstr [node]
  (-> node
      (html/select [:#var-docstr])
      first
      (html/text)))

(defn- search-for [doc api]
  (let [elems (html/select doc [:#var-entry])
      id (build-doc-id-str api)
      node (->
             (reduce (fn [curr el]
                      (if (and (nil? curr)
                               (= (get-h2-id el) id))
                        el
                        curr)) nil elems))]
    (str "<div><pre>" (get-var-usage node) "</pre><pre>" (get-var-docstr node))))

(defn get-doc [api]
  (when (= @html-doc 0)
    (init-doc))
  (let [doc @html-doc]
    (search-for doc api)))
;(POST "/docify" {body :body} (get-doc (slurp body)))

(defroutes app-routes
  (GET "/" [] (resp/resource-response "index.html" {:root "public"}))
  (GET "/doc/:api" [api] (get-doc api))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (handler/site  app-routes))
