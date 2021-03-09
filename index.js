import React from "react";
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";

import "./styles.css";
// need to import the vis network css in order to show tooltip
import "./network.css";
function App() {


  // edges: Array(9)
  // 0: {to: 1, from: 2, label: 5}
  // 1: {to: 2, from: 3, label: 5}
  // 2: {to: 3, from: 4, label: 4}
  // 3: {to: 3, from: 5, label: 1}
  // 4: {to: 4, from: 5, label: 4}
  // 5: {to: 4, from: 7, label: 1}
  // 6: {to: 5, from: 6, label: 5}
  // 7: {to: 6, from: 4, label: 1}
  // 8: {to: 6, from: 7, label: 4}
  // length: 9
  // __proto__: Array(0)
  // nodes: Array(7)
  // 0: {id: 1, label: "SO", title: "SO"}
  // 1: {id: 2, label: "Inventary", title: "Inventary"}
  // 2: {id: 3, label: "Invoice", title: "Invoice"}
  // 3: {id: 4, label: "Delivery", title: "Delivery"}
  // 4: {id: 5, label: "LED", title: "LED"}
  // 5: {id: 6, label: "CT", title: "CT"}
  // 6: {id: 7, label: "Payment", title: "Payment"}
  // length: 7
  // __proto__: Array(0)
  // __proto__: Object

  const graph = {
    nodes: [

      // { id: 1, label: "A", title: "A", x: 50, y: 100 },
      // { id: 2, label: "B", title: "B", x: 50, y: 200 },
      // { id: 3, label: "C", title: "C", x: 50, y: 300 },
      // { id: 4, label: "D", title: "D", x: 100, y: 400 },
      // { id: 5, label: "E", title: "E", x: 50, y: 500 }

      { id: 1, label: "SO", title: "SO", x: 50, y: 100 },
      { id: 2, label: "Inventary", title: "Inventary", x: 50, y: 200 },
      { id: 3, label: "Invoice", title: "Invoice", x: 50, y: 300 },
      { id: 4, label: "Delivery", title: "Delivery", x: 200, y: 400 },
      { id: 5, label: "LED", title: "LED", x: 50, y: 400 },
      { id: 6, label: "CT", title: "CT", x: 50, y: 500 },
      { id: 7, label: "Payment", title: "Payment", x: 50, y: 600 }

    ],
    edges: [
      { to: 1, from: 2, label: "5" },
      { to: 2, from: 3, label: "5" },
      { to: 3, from: 4, label: "4" },
      { to: 3, from: 5, label: "1" },
      { to: 4, from: 5, label: "4" },
      { to: 4, from: 7, label: "1" },
      { to: 5, from: 6, label: "5" },
      { to: 6, from: 4, label: "1" },
      { to: 6, from: 7, label: "4" }

    ]
  };

  // const options = {
  //   layout: {
  //     hierarchical: false
  //   },
  //   edges: {
  //     color: "#000000"
  //   },
  //   height: "500px"
  // };

  let width = 800;
  let height = 700;


  const options = {
    width: width + 'px',
    height: height + 'px',
    edges: {
      color: '#1D1D1D',
      arrows: {
        to: { enabled: false, scaleFactor: 1, type: 'arrow' },
        middle: { enabled: false, scaleFactor: 1, type: 'arrow' },
        from: { enabled: true, scaleFactor: 1, type: 'arrow' }
      },
    },
    nodes: {
      // shape: 'circle'
      borderWidth: 10,
      borderWidthSelected: 1,
      color: '#0262C4',
      shape: 'circle',
      size: 1,
      shadow: {
        enabled: false,
        // color: 'rgba(0,0,0,0.5)',
        size: 10,
        x: 5,
        y: 5,
      },
      font: {
        color: '#fff',
        size: 8,
        bold: {
          mod: 'bold',
        },
      },
    },

    interaction: {
      dragNodes: false,
      hover: true
    },
    physics: false
  };


  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    }
  };
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

function printName() {
  let adjMatrix = [
    [0,5,0,0,0,0,0],
    [0,0,5,0,0,0,0],
	[0,0,0,4,1,0,0],
	[0,0,0,0,4,0,1],
	[0,0,0,0,0,5,0],
	[0,0,0,1,0,0,4],
	[0,0,0,0,0,0,0],
  ];
  let size=adjMatrix.length;
  let _trans = ['SO','Inventary','Invoice','Delivery','LED','CT','Payment']
  let graph={
    nodes:[],
    edges:[]
  }
  for(let i =1;i<=size;i++){
   let_nodes = '';
    if(i==1){
   	  _nodes = 'SO';}
    else if(i==2){
     _nodes = 'Inventary';}
    else if(i==3){
     _nodes = 'Invoice';}
    else if(i==4){
     _nodes = 'Delivery';}
    else if(i==5){
     _nodes = 'LED';}
	  else if(i==6){
     _nodes = 'CT';}
    else if(i==7){
     _nodes = 'Payment';}
    graph.nodes.push({'id':i,'label':_nodes,'title':_nodes})
    for(let j = 1;j<=size;j++){    
	   if(adjMatrix[i-1][j-1] !== 0){
          graph.edges.push({'to':i,'from':j,label:adjMatrix[i-1][j-1]});		  
      }
    
    }
  }
console.log(graph)
}

// 1. Code RUN automatically: type your name
printName()