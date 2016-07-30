import React = require("react");
import ReactDOM = require("react-dom");

import { Tag, template, mount } from "rioct";

// loads the template so it's registered in rioct first
import "./hello-world.html";

@template("hello-world")
class HelloWorld extends Tag {
   greet = "Hello";
   name = "John";

   constructor(props) {
      super(props);
      this.on("greet-changed", ()=> {
         console.log("Rioct comes with Riot's observable interface");
      });
   }

   changeGreet() {
      this.greet = "Hola amigo";
      this.update();
      this.trigger("greet-changed");
   }
}

// scans the DOM for any known rioct tags and mounts them
window.onload = () => mount();
