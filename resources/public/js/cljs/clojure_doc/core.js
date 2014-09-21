// Compiled by ClojureScript 0.0-2311
goog.provide('clojure_doc.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
clojure_doc.core.initial_code = " ; Conway's Game of Life, based on the work of:\n;; Laurent Petit https://gist.github.com/1200343\n;; Christophe Grand http://clj-me.cgrand.net/2011/08/19/conways-game-of-life\n\n(ns ^{:doc \"Conway's Game of Life.\"}\n game-of-life)\n\n;; Core game of life's algorithm functions\n\n(defn neighbours\n  \"Given a cell's coordinates, returns the coordinates of its neighbours.\"\n  [[x y]]\n  (for [dx [-1 0 1] dy (if (zero? dx) [-1 1] [-1 0 1])]\n    [(+ dx x) (+ dy y)]))\n\n(defn step\n  \"Given a set of living cells, computes the new set of living cells.\"\n  [cells]\n  (set (for [[cell n] (frequencies (mapcat neighbours cells))\n             :when (or (= n 3) (and (= n 2) (cells cell)))]\n         cell)))\n\n;; Utility methods for displaying game on a text terminal\n\n(defn print-board\n  \"Prints a board on *out*, representing a step in the game.\"\n  [board w h]\n  (doseq [x (range (inc w)) y (range (inc h))]\n    (if (= y 0) (print \"\n\"))\n    (print (if (board [x y]) \"[X]\" \" . \"))))\n\n(defn display-grids\n  \"Prints a squence of boards on *out*, representing several steps.\"\n  [grids w h]\n  (doseq [board grids]\n    (print-board board w h)\n    (print \"\n\")))\n\n;; Launches an example board\n\n(def\n  ^{:doc \"board represents the initial set of living cells\"}\n   board #{[2 1] [2 2] [2 3]})\n\n(display-grids (take 3 (iterate step board)) 5 5)\n\n;; Let's play with characters\n(println \\1 \\a \\# \\\\\n         \\\" \\( \\newline\n         \\} \\\" \\space\n         \\tab \\return \\backspace\n         \\u1000 \\uAaAa \\u9F9F)";
clojure_doc.core.clojureDoc = angular.module("clojureDoc",["ui.codemirror","restangular"]);
clojure_doc.core.show_help = (function (){var f_SHARP_ = (function (editor){var cursor_coords = (function (){var obj_SHARP_ = editor;var fn_SHARP_ = (obj_SHARP_["cursorCoords"]);return fn_SHARP_.call(obj_SHARP_);
})();var left = (cursor_coords["left"]);var top = (cursor_coords["top"]);var cursor_pos = (function (){var obj_SHARP_ = editor;var fn_SHARP_ = (obj_SHARP_["coordsChar"]);return fn_SHARP_.call(obj_SHARP_,(function (){var G__13978 = (function (){var obj13981 = {};return obj13981;
})();(G__13978["top"] = top);
(G__13978["left"] = left);
return G__13978;
})());
})();var token = (function (){var obj_SHARP_ = editor;var fn_SHARP_ = (obj_SHARP_["getTokenAt"]);return fn_SHARP_.call(obj_SHARP_,(function (){var G__13982 = (function (){var obj13985 = {};return obj13985;
})();(G__13982["ch"] = (cursor_pos["ch"]));
(G__13982["line"] = (cursor_pos["line"]));
return G__13982;
})(),true);
})();if(cljs.core._EQ_.call(null,(token["type"]),"builtin"))
{return cljs.core.println.call(null,"Token is ",(token["string"]));
} else
{return null;
}
});(f_SHARP_["cljs$arities"] = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [1], null));
return f_SHARP_;
})();
clojure_doc.core.clojureDoc_docify = ["$scope","Restangular",(function ($scope,Restangular){var o_SHARP__13990 = $scope;(o_SHARP__13990["codemirrorLoaded"] = ((function (o_SHARP__13990){
return (function (editor){var obj_SHARP__13991 = editor;var fn_SHARP__13992 = (obj_SHARP__13991["setOption"]);fn_SHARP__13992.call(obj_SHARP__13991,"lineNumbers",true);
var obj_SHARP_ = editor;var fn_SHARP_ = (obj_SHARP_["on"]);return fn_SHARP_.call(obj_SHARP_,"cursorActivity",clojure_doc.core.show_help);
});})(o_SHARP__13990))
);
var o_SHARP__13993 = $scope;(o_SHARP__13993["docify"] = (function (){var obj_SHARP_ = Restangular;var fn_SHARP_ = (obj_SHARP_["all"]);return fn_SHARP_.call(obj_SHARP_,"docify");
})());
var o_SHARP__13994 = $scope;(o_SHARP__13994["code"] = clojure_doc.core.initial_code);
var o_SHARP__13995 = $scope;(o_SHARP__13995["editorOptions"] = (function (){var G__13986 = (function (){var obj13989 = {};return obj13989;
})();(G__13986["lineWrapping"] = true);
(G__13986["mode"] = "clojure");
(G__13986["readOnly"] = "nocursor");
(G__13986["lineNumbers"] = true);
return G__13986;
})());
var o_SHARP_ = $scope;(o_SHARP_["doDocify"] = ((function (o_SHARP_){
return (function (){cljs.core.println.call(null,"Submitting... ",($scope["code"]));
var obj_SHARP_ = ($scope["docify"]);var fn_SHARP_ = (obj_SHARP_["post"]);return fn_SHARP_.call(obj_SHARP_,($scope["code"]));
});})(o_SHARP_))
);
return o_SHARP_;
})];
angular.module("clojureDoc").controller("docify",clojure_doc.core.clojureDoc_docify);

//# sourceMappingURL=core.js.map