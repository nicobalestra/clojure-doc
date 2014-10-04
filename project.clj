(defproject clojure-doc "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2311"]
                 [im.chit/gyr "0.3.1"]
                 [compojure "1.1.8"]
                 [enlive "1.1.5"]
                 [ring/ring-json "0.3.1"]
                 ]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-ring "0.8.11"]]

  :ring {:handler clojure-doc.handler/app}

  :source-paths ["src/clj" "src/cljs"]
  :resource-paths ["resources"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/clj" "src/cljs"]
              :compiler {
                :output-to "resources/public/js/cljs/clojure_doc.js"
                :output-dir "resources/public/js/cljs"
                :optimizations :none
                :source-map true}}]}


  :profiles
  {:dev
   {:dependencies [[javax.servlet/servlet-api "2.5"]
                   [ring-mock "0.1.5"]]}}
  )
