import React, { Component } from 'react';
import { Graph } from './graph';
import './App.css';

// !!! IMPLEMENT ME
const canvasWidth = 700;
const canvasHeight = 1000;

/**
 * GraphView
 */
class GraphView extends Component {
  /**
   * On mount
   */
  componentDidMount() {
    this.updateCanvas();
  }

  /**
   * On state update
   */
  componentDidUpdate() {
    this.updateCanvas();
  }

  /**
   * Render the canvas
   */
  updateCanvas() {
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');
    
    // Clear it
    // if you give this a color you don't recognize it will turn black 
    // it won't give us appropriate error;
    // ctx.fillStyle = 'teal';
    // ctx.fillRect(200, 300, canvasWidth, canvasHeight);
    ctx.fillStyle = 'blue';    
    ctx.fillRect(200, 150, canvasWidth, canvasHeight);
    ctx.fillStyle = 'rgb(0, 206, 0';    
    ctx.fillRect(50, 50, 50, 50);
    ctx.fillStyle = 'rgb(209, 206, 0)';    
    ctx.fillRect(250, 250, 25, 25);

    ctx.moveTo(10,20);
    ctx.lineTo(1300,900);
    ctx.stroke();

    ctx.lineTo(150,160);
    ctx.stroke();
    ctx.beginPath(); // begin path closes the circle
    // ctx.arc(95,50,40,0,2*Math.PI);
    // ctx.moveTo(500, 50);
    ctx.arc(500,50,10,0,3*Math.PI);
    ctx.moveTo(10, 50);
    ctx.arc(300,50,10,0,3*Math.PI);
    ctx.moveTo(10, 10);
    // ctx.moveTo(100, 50);
    // ctx.arc(180,50,10,0,2*Math.PI);
    // ctx.arc(180,50,10,0,2*Math.PI);
    ctx.stroke();
    for(let i = 0; i < 500; i++) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(i * 10, 600);
      ctx.stroke();
    }
    // !!! IMPLEMENT ME
    // compute connected components
    // draw edges
    // draw verts
    // draw vert values (labels)
    
  }
  
  /**
   * Render
   */
  render() {
    return <canvas ref="canvas" width={canvasWidth} height={canvasHeight}></canvas>;
  }
}


/**
 * App
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: new Graph()
    };

    // !!! IMPLEMENT ME
    // use the graph randomize() method
  }

  render() {
    return (
      <div className="App">
        <GraphView graph={this.state.graph}></GraphView>
      </div>
    );
  }
}

export default App;
