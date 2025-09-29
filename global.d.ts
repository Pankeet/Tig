import React from "react";

declare module "react" {
  interface InputHTMLAttributes<T> {
    webkitdirectory?: boolean | string;
  }
}
