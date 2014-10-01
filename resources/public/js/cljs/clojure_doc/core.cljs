(ns clojure-doc.core
  (:use-macros [purnam.core :only [obj arr ? ! !> ?> def.n]]
               [gyr.core :only [def.module def.filter
                                def.factory def.controller
                                def.service]]))
(enable-console-print!)

(def initial-code " ; Conway's Game of Life, based on the work of:
;; Laurent Petit https://gist.github.com/1200343
;; Christophe Grand http://clj-me.cgrand.net/2011/08/19/conways-game-of-life

(ns ^{:doc \"Conway's Game of Life.\"}
 game-of-life)

;; Core game of life's algorithm functions

(defn neighbours
  \"Given a cell's coordinates, returns the coordinates of its neighbours.\"
  [[x y]]
  (for [dx [-1 0 1] dy (if (zero? dx) [-1 1] [-1 0 1])]
    [(+ dx x) (+ dy y)]))

(defn step
  \"Given a set of living cells, computes the new set of living cells.\"
  [cells]
  (set (for [[cell n] (frequencies (mapcat neighbours cells))
             :when (or (= n 3) (and (= n 2) (cells cell)))]
         cell)))

;; Utility methods for displaying game on a text terminal

(defn print-board
  \"Prints a board on *out*, representing a step in the game.\"
  [board w h]
  (doseq [x (range (inc w)) y (range (inc h))]
    (if (= y 0) (print \"\n\"))
    (print (if (board [x y]) \"[X]\" \" . \"))))

(defn display-grids
  \"Prints a squence of boards on *out*, representing several steps.\"
  [grids w h]
  (doseq [board grids]
    (print-board board w h)
    (print \"\n\")))

;; Launches an example board

(def
  ^{:doc \"board represents the initial set of living cells\"}
   board #{[2 1] [2 2] [2 3]})

(display-grids (take 3 (iterate step board)) 5 5)

;; Let's play with characters
(println \\1 \\a \\# \\\\
         \\\" \\( \\newline
         \\} \\\" \\space
         \\tab \\return \\backspace
         \\u1000 \\uAaAa \\u9F9F)")

(def.module clojureDoc [ui.codemirror, restangular])

(def.factory clojureDoc.BaseREST [Restangular]
   (obj :getDoc (
    fn [api]
    (let [restCall (?> Restangular.one "doc" api)
          doc (?> restCall.get)]
      doc
    ))))
  

(def.n show-help [editor baseRest]
  (let [cursor-coords (editor.cursorCoords)
        left cursor-coords.left
        top cursor-coords.top
        cursor-pos (editor.coordsChar (obj :left left :top top))
        token (editor.getTokenAt (obj :line cursor-pos.line :ch cursor-pos.ch) true)
        ]
  (when (not (nil? (#{"builtin" "keyword"} token.type)))
    (baseRest.getDoc token.string))))

(def.controller clojureDoc.docify [$scope, Restangular, BaseREST]
  (! $scope.codemirrorLoaded
   (fn [editor]
     (!> editor.setOption "lineNumbers" true)
     (!> editor.on "cursorActivity" (fn [editor]
                                      (! $scope.currentDoc (show-help editor BaseREST))))))
 (! $scope.code initial-code)
  (! $scope.editorOptions
     (obj :lineWrapping  true
          :lineNumbers   true,
          :readOnly     "nocursor"
          :mode "clojure"))
  (! $scope.currentDoc "This is the current documentation!!!")
)

