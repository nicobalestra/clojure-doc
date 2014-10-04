// Compiled by ClojureScript 0.0-2311
goog.provide('clojure_doc.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
clojure_doc.core.initial_code = " ; Conway's Game of Life, based on the work of:\n;; Laurent Petit https://gist.github.com/1200343\n;; Christophe Grand http://clj-me.cgrand.net/2011/08/19/conways-game-of-life\n\n(ns ^{:doc \"Conway's Game of Life.\"}\n game-of-life)\n\n;; Core game of life's algorithm functions\n\n(defn neighbours\n  \"Given a cell's coordinates, returns the coordinates of its neighbours.\"\n  [[x y]]\n  (for [dx [-1 0 1] dy (if (zero? dx) [-1 1] [-1 0 1])]\n    [(+ dx x) (+ dy y)]))\n\n(defn step\n  \"Given a set of living cells, computes the new set of living cells.\"\n  [cells]\n  (set (for [[cell n] (frequencies (mapcat neighbours cells))\n             :when (or (= n 3) (and (= n 2) (cells cell)))]\n         cell)))\n\n;; Utility methods for displaying game on a text terminal\n\n(defn print-board\n  \"Prints a board on *out*, representing a step in the game.\"\n  [board w h]\n  (doseq [x (range (inc w)) y (range (inc h))]\n    (if (= y 0) (print \"\n\"))\n    (print (if (board [x y]) \"[X]\" \" . \"))))\n\n(defn display-grids\n  \"Prints a squence of boards on *out*, representing several steps.\"\n  [grids w h]\n  (doseq [board grids]\n    (print-board board w h)\n    (print \"\n\")))\n\n;; Launches an example board\n\n(def\n  ^{:doc \"board represents the initial set of living cells\"}\n   board #{[2 1] [2 2] [2 3]})\n\n(display-grids (take 3 (iterate step board)) 5 5)\n\n;; Let's play with characters\n(println \\1 \\a \\# \\\\\n         \\\" \\( \\newline\n         \\} \\\" \\space\n         \\tab \\return \\backspace\n         \\u1000 \\uAaAa \\u9F9F)";
clojure_doc.core.clojureDoc = angular.module("clojureDoc",["ui.codemirror","restangular"]);
clojure_doc.core.clojureDoc_BaseREST = ["Restangular",(function (Restangular){var G__57943 = (function (){var obj57946 = {};return obj57946;
})();(G__57943["getDoc"] = ((function (G__57943){
return (function (api){var restCall = (Restangular["one"]).call(null,"doc",api);var doc = (restCall["get"]).call(null);return doc;
});})(G__57943))
);
return G__57943;
})];
angular.module("clojureDoc").factory("BaseREST",clojure_doc.core.clojureDoc_BaseREST);
clojure_doc.core.show_help = (function (){var f_SHARP_ = (function (editor,baseRest){var cursor_coords = (function (){var obj_SHARP_ = editor;var fn_SHARP_ = (obj_SHARP_["cursorCoords"]);return fn_SHARP_.call(obj_SHARP_);
})();var left = (cursor_coords["left"]);var top = (cursor_coords["top"]);var cursor_pos = (function (){var obj_SHARP_ = editor;var fn_SHARP_ = (obj_SHARP_["coordsChar"]);return fn_SHARP_.call(obj_SHARP_,(function (){var G__57947 = (function (){var obj57950 = {};return obj57950;
})();(G__57947["top"] = top);
(G__57947["left"] = left);
return G__57947;
})());
})();var token = (function (){var obj_SHARP_ = editor;var fn_SHARP_ = (obj_SHARP_["getTokenAt"]);return fn_SHARP_.call(obj_SHARP_,(function (){var G__57951 = (function (){var obj57954 = {};return obj57954;
})();(G__57951["ch"] = (cursor_pos["ch"]));
(G__57951["line"] = (cursor_pos["line"]));
return G__57951;
})(),true);
})();if(!((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["keyword",null,"builtin",null], null), null).call(null,(token["type"])) == null)))
{var obj_SHARP_ = baseRest;var fn_SHARP_ = (obj_SHARP_["getDoc"]);return fn_SHARP_.call(obj_SHARP_,(token["string"]));
} else
{return null;
}
});(f_SHARP_["cljs$arities"] = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [2], null));
return f_SHARP_;
})();
clojure_doc.core.clojureDoc_docify = ["$scope","BaseREST","$sce",(function ($scope,BaseREST,$sce){var o_SHARP__57963 = $scope;(o_SHARP__57963["codemirrorLoaded"] = ((function (o_SHARP__57963){
return (function (editor){var obj_SHARP__57964 = editor;var fn_SHARP__57965 = (obj_SHARP__57964["setOption"]);fn_SHARP__57965.call(obj_SHARP__57964,"lineNumbers",true);
var obj_SHARP_ = editor;var fn_SHARP_ = (obj_SHARP_["on"]);return fn_SHARP_.call(obj_SHARP_,"cursorActivity",((function (obj_SHARP_,fn_SHARP_,o_SHARP__57963){
return (function (editor__$1){var doc = clojure_doc.core.show_help.call(null,editor__$1,BaseREST);if(cljs.core.truth_(doc))
{var obj_SHARP___$1 = doc;var fn_SHARP___$1 = (obj_SHARP___$1["then"]);return fn_SHARP___$1.call(obj_SHARP___$1,((function (obj_SHARP___$1,fn_SHARP___$1,doc,obj_SHARP_,fn_SHARP_,o_SHARP__57963){
return (function (resp){var o_SHARP__57966__$1 = $scope;(o_SHARP__57966__$1["usage"] = (function (){var obj_SHARP___$2 = $sce;var fn_SHARP___$2 = (obj_SHARP___$2["trustAsHtml"]);return fn_SHARP___$2.call(obj_SHARP___$2,(resp["usage"]));
})());
var o_SHARP__57967__$1 = $scope;(o_SHARP__57967__$1["description"] = (function (){var obj_SHARP___$2 = $sce;var fn_SHARP___$2 = (obj_SHARP___$2["trustAsHtml"]);return fn_SHARP___$2.call(obj_SHARP___$2,(resp["description"]));
})());
var o_SHARP___$1 = $scope;(o_SHARP___$1["title"] = (resp["keyword"]));
return o_SHARP___$1;
});})(obj_SHARP___$1,fn_SHARP___$1,doc,obj_SHARP_,fn_SHARP_,o_SHARP__57963))
);
} else
{return null;
}
});})(obj_SHARP_,fn_SHARP_,o_SHARP__57963))
);
});})(o_SHARP__57963))
);
var o_SHARP__57968 = $scope;(o_SHARP__57968["code"] = clojure_doc.core.initial_code);
var o_SHARP__57969 = $scope;(o_SHARP__57969["editorOptions"] = (function (){var G__57955 = (function (){var obj57958 = {};return obj57958;
})();(G__57955["lineWrapping"] = true);
(G__57955["mode"] = "clojure");
(G__57955["readOnly"] = "nocursor");
(G__57955["lineNumbers"] = true);
return G__57955;
})());
var o_SHARP_ = $scope;(o_SHARP_["currentDoc"] = (function (){var G__57959 = (function (){var obj57962 = {};return obj57962;
})();(G__57959["title"] = "");
return G__57959;
})());
return o_SHARP_;
})];
angular.module("clojureDoc").controller("docify",clojure_doc.core.clojureDoc_docify);

//# sourceMappingURL=core.js.map