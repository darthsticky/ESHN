import React, { Component } from 'react'

export default (props) => {
  props.type !== "text" ? null : true;

  props.type !== "long-text" ? null : true;

  props.type !== "button" ? null : true;

  props.type === "" ? null : null;
}