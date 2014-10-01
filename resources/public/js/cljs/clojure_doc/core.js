// Compiled by ClojureScript 0.0-2311
goog.provide('clojure_doc.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
clojure_doc.core.initial_code = " ; Conway's Game of Life, based on the work of:\n;; Laurent Petit https://gist.github.com/1200343\n;; Christophe Grand http://clj-me.cgrand.net/2011/08/19/conways-game-of-life\n\n(ns ^{:doc \"Conway's Game of Life.\"}\n game-of-life)\n\n;; Core game of life's algorithm functions\n\n(defn neighbours\n  \"Given a cell's coordinates, returns the coordinates of its neighbours.\"\n  [[x y]]\n  (for [dx [-1 0 1] dy (if (zero? dx) [-1 1] [-1 0 1])]\n    [(+ dx x) (+ dy y)]))\n\n(defn step\n  \"Given a set of living cells, computes the new set of living cells.\"\n  [cells]\n  (set (for [[cell n] (frequencies (mapcat neighbours cells))\n             :when (or (= n 3) (and (= n 2) (cells cell)))]\n         cell)))\n\n;; Utility methods for displaying game on a text terminal\n\n(defn print-board\n  \"Prints a board on *out*, representing a step in the game.\"\n  [board w h]\n  (doseq [x (range (inc w)) y (range (inc h))]\n    (if (= y 0) (print \"\n\"))\n    (print (if (board [x y]) \"[X]\" \" . \"))))\n\n(defn display-grids\n  \"Prints a squence of boards on *out*, representing several steps.\"\n  [grids w h]\n  (doseq [board grids]\n    (print-board board w h)\n    (print \"\n\")))\n\n;; Launches an example board\n\n(def\n  ^{:doc \"board represents the initial set of living cells\"}\n   board #{[2 1] [2 2] [2 3]})\n\n(display-grids (take 3 (iterate step board)) 5 5)\n\n;; Let's play with characters\n(println \\1 \\a \\# \\\\\n         \\\" \\( \\newline\n         \\} \\\" \\space\n         \\tab \\return \\backspace\n         \\u1000 \\uAaAa \\u9F9F)";
clojure_doc.core.clojureDoc = angular.module("clojureDoc",["ui.codemirror","restangular"]);
clojure_doc.core.clojureDoc_BaseREST = ["Restangular",(function (Restangular){var G__5757 = (function (){var obj5760 = {};return obj5760;
})();(G__5757["getDoc"] = ((function (G__5757){
return (function (api){var restCall = (Restangular["one"]).call(null,"doc",api);var doc = (restCall["get"]).call(null);return doc;
});})(G__5757))
);
return G__5757;
})];
angular.module("clojureDoc").factory("BaseREST",clojure_doc.core.clojureDoc_BaseREST);
clojure_doc.core.show_help = (function (){var f_SHARP_ = (function (editor,baseRest){var cursor_coords = (function (){var obj_SHARP_ = editor;var fn_SHARP_ = (obj_SHARP_["cursorCoords"]);return fn_SHARP_.call(obj_SHARP_);
})();var left = (cursor_coords["left"]);var top = (cursor_coords["top"]);var cursor_pos = (function (){var obj_SHARP_ = editor;var fn_SHARP_ = (obj_SHARP_["coordsChar"]);return fn_SHARP_.call(obj_SHARP_,(function (){var G__5761 = (function (){var obj5764 = {};return obj5764;
})();(G__5761["top"] = top);
(G__5761["left"] = left);
return G__5761;
})());
})();var token = (function (){var obj_SHARP_ = editor;var fn_SHARP_ = (obj_SHARP_["getTokenAt"]);return fn_SHARP_.call(obj_SHARP_,(function (){var G__5765 = (function (){var obj5768 = {};return obj5768;
})();(G__5765["ch"] = (cursor_pos["ch"]));
(G__5765["line"] = (cursor_pos["line"]));
return G__5765;
})(),true);
})();if(!((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["keyword",null,"builtin",null], null), null).call(null,(token["type"])) == null)))
{var obj_SHARP_ = baseRest;var fn_SHARP_ = (obj_SHARP_["getDoc"]);return fn_SHARP_.call(obj_SHARP_,(token["string"]));
} else
{return null;
}
});(f_SHARP_["cljs$arities"] = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [2], null));
return f_SHARP_;
})();
clojure_doc.core.clojureDoc_docify = ["$scope","Restangular","BaseREST",(function ($scope,Restangular,BaseREST){var o_SHARP__5773 = $scope;(o_SHARP__5773["codemirrorLoaded"] = ((function (o_SHARP__5773){
return (function (editor){var obj_SHARP__5774 = editor;var fn_SHARP__5775 = (obj_SHARP__5774["setOption"]);fn_SHARP__5775.call(obj_SHARP__5774,"lineNumbers",true);
var obj_SHARP_ = editor;var fn_SHARP_ = (obj_SHARP_["on"]);return fn_SHARP_.call(obj_SHARP_,"cursorActivity",((function (obj_SHARP_,fn_SHARP_,o_SHARP__5773){
return (function (editor__$1){var o_SHARP___$1 = $scope;(o_SHARP___$1["currentDoc"] = clojure_doc.core.show_help.call(null,editor__$1,BaseREST));
return o_SHARP___$1;
});})(obj_SHARP_,fn_SHARP_,o_SHARP__5773))
);
});})(o_SHARP__5773))
);
var o_SHARP__5776 = $scope;(o_SHARP__5776["code"] = clojure_doc.core.initial_code);
var o_SHARP__5777 = $scope;(o_SHARP__5777["editorOptions"] = (function (){var G__5769 = (function (){var obj5772 = {};return obj5772;
})();(G__5769["lineWrapping"] = true);
(G__5769["mode"] = "clojure");
(G__5769["readOnly"] = "nocursor");
(G__5769["lineNumbers"] = true);
return G__5769;
})());
var o_SHARP_ = $scope;(o_SHARP_["currentDoc"] = "This is the current documentation!!!");
return o_SHARP_;
})];
angular.module("clojureDoc").controller("docify",clojure_doc.core.clojureDoc_docify);

//# sourceMappingURL=core.js.map