(window.webpackJsonp=window.webpackJsonp||[]).push([[15,17],{1016:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=function(a,b){var d=b;return b?Math.round(a*(d=Math.pow(10,d)))/d:Math.round(a)}},1082:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var _immutable=_interopRequireDefault(__webpack_require__(1038)),_propTypes=_interopRequireDefault(__webpack_require__(2)),_react=_interopRequireDefault(__webpack_require__(0)),_reactMapGl=__webpack_require__(1031),_geo=__webpack_require__(1083),_roundDecimal=_interopRequireDefault(__webpack_require__(1016)),_luminanceFromRGB=_interopRequireDefault(__webpack_require__(1084));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}__webpack_require__(1155);var propTypes={aggregation:_propTypes.default.string,compositeOperation:_propTypes.default.string,dotRadius:_propTypes.default.number,lngLatAccessor:_propTypes.default.func,locations:_propTypes.default.instanceOf(_immutable.default.List).isRequired,pointRadiusUnit:_propTypes.default.string,renderWhileDragging:_propTypes.default.bool,rgb:_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.number])),zoom:_propTypes.default.number},ScatterPlotGlowOverlay=function(a){function b(b){var c;return(c=a.call(this,b)||this).redraw=c.redraw.bind(_assertThisInitialized(_assertThisInitialized(c))),c}!function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a);var c=b.prototype;return c.drawText=function(a,b,c){void 0===c&&(c={});var e=c,f=e.fontHeight,g=void 0===f?0:f,h=e.label,i=void 0===h?"":h,j=e.radius,k=void 0===j?0:j,l=e.rgb,m=void 0===l?[0,0,0]:l,n=e.shadow,o=1.8*k,p=(0,_luminanceFromRGB.default)(m[1],m[2],m[3]);a.globalCompositeOperation="source-over",a.fillStyle=p<=110?"white":"black",a.font=g+"px sans-serif",a.textAlign="center",a.textBaseline="middle",void 0!==n&&n&&(a.shadowBlur=15,a.shadowColor=p<=110?"black":"");var q=a.measureText(i).width;q>o&&(a.font=g/q*o+"px sans-serif");var r=this.props.compositeOperation;a.fillText(i,b[0],b[1]),a.globalCompositeOperation=r,a.shadowBlur=0,a.shadowColor=""},c.redraw=function(a){var b=a.width,c=a.height,d=a.ctx,e=a.isDragging,f=a.project,g=this.props,h=g.aggregation,i=g.compositeOperation,j=g.dotRadius,k=g.lngLatAccessor,l=g.locations,m=g.pointRadiusUnit,n=g.renderWhileDragging,o=g.rgb,p=g.zoom,q=j,r=[];l.forEach(function(a,b){a.get("properties").get("cluster")&&(r[b]=function(a,b){var c=a.get("point_count");if(!b)return c;if("sum"===b||"min"===b||"max"===b)return a.get(b);var d=a.get("sum");if("mean"===b)return Math.round(d/c*100)/100;var f=a.get("squaredSum")/c-Math.pow(d/c,2);return"var"===b?Math.round(100*f)/100:"stdev"===b?Math.round(100*Math.sqrt(f))/100:c}(a.get("properties"),h))},this);var s=Math.max.apply(Math,r.filter(function(a){return!Number.isNaN(a)}));d.clearRect(0,0,b,c),d.globalCompositeOperation=i,(n||!e)&&l&&l.forEach(function(a,e){var g=f(k(a)),h=[(0,_roundDecimal.default)(g[0],1),(0,_roundDecimal.default)(g[1],1)];if(0<=h[0]+q&&h[0]-q<b&&0<=h[1]+q&&h[1]-q<c)if(d.beginPath(),a.get("properties").get("cluster")){var i=r[e],j=(0,_roundDecimal.default)(Math.pow(i/s,.5)*q,1),l=(0,_roundDecimal.default)(.5*j,1),n=h[0],t=h[1],u=d.createRadialGradient(n,t,j,n,t,0);u.addColorStop(1,"rgba("+o[1]+", "+o[2]+", "+o[3]+", 0.8)"),u.addColorStop(0,"rgba("+o[1]+", "+o[2]+", "+o[3]+", 0)"),d.arc(h[0],h[1],j,0,2*Math.PI),d.fillStyle=u,d.fill(),Number.isFinite(parseFloat(i))&&(1e4<=i?i=Math.round(i/1e3)+"k":1e3<=i&&(i=Math.round(i/100)/10+"k"),this.drawText(d,h,{fontHeight:l,label:i,radius:j,rgb:o,shadow:!0}))}else{var v,w=q/6,x=a.get("properties").get("radius"),y=a.get("properties").get("metric"),z=null===x?w:x;if(null!==x){var A=k(a)[1];"Kilometers"===m?(v=(0,_roundDecimal.default)(z,2)+"km",z=(0,_geo.kmToPixels)(z,A,p)):"Miles"===m&&(v=(0,_roundDecimal.default)(z,2)+"mi",z=(0,_geo.kmToPixels)(z*_geo.MILES_PER_KM,A,p))}null!==y&&(v=Number.isFinite(parseFloat(y))?(0,_roundDecimal.default)(y,2):y),z||(z=w),d.arc(h[0],h[1],(0,_roundDecimal.default)(z,1),0,2*Math.PI),d.fillStyle="rgb("+o[1]+", "+o[2]+", "+o[3]+")",d.fill(),void 0!==v&&this.drawText(d,h,{fontHeight:(0,_roundDecimal.default)(z,1),label:v,radius:z,rgb:o,shadow:!1})}},this)},c.render=function(){return _react.default.createElement(_reactMapGl.CanvasOverlay,{redraw:this.redraw})},b}(_react.default.PureComponent);ScatterPlotGlowOverlay.propTypes=propTypes,ScatterPlotGlowOverlay.defaultProps={compositeOperation:"source-over",dotRadius:4,lngLatAccessor:function(a){return[a.get(0),a.get(1)]},renderWhileDragging:!0};var _default=ScatterPlotGlowOverlay;exports.default=_default},1083:function(module,exports,__webpack_require__){"use strict";var a,_roundDecimal=(a=__webpack_require__(1016))&&a.__esModule?a:{default:a};exports.__esModule=!0,exports.kmToPixels=function(a,b,c){var d=b*(Math.PI/180),e=EARTH_CIRCUMFERENCE_KM*Math.cos(d)/Math.pow(2,c+9);return(0,_roundDecimal.default)(a/e,2)},exports.MILES_PER_KM=exports.EARTH_CIRCUMFERENCE_KM=void 0;var EARTH_CIRCUMFERENCE_KM=40075.16;exports.EARTH_CIRCUMFERENCE_KM=EARTH_CIRCUMFERENCE_KM;exports.MILES_PER_KM=1.60934},1084:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=function(a,c,d){return LUMINANCE_RED_WEIGHT*a+LUMINANCE_GREEN_WEIGHT*c+LUMINANCE_BLUE_WEIGHT*d},exports.LUMINANCE_BLUE_WEIGHT=exports.LUMINANCE_GREEN_WEIGHT=exports.LUMINANCE_RED_WEIGHT=void 0;var LUMINANCE_RED_WEIGHT=.2126;exports.LUMINANCE_RED_WEIGHT=LUMINANCE_RED_WEIGHT;var LUMINANCE_GREEN_WEIGHT=.7152;exports.LUMINANCE_GREEN_WEIGHT=LUMINANCE_GREEN_WEIGHT;var LUMINANCE_BLUE_WEIGHT=.0722;exports.LUMINANCE_BLUE_WEIGHT=LUMINANCE_BLUE_WEIGHT},1085:function(module,exports,__webpack_require__){var content=__webpack_require__(1086);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(119)(content,options);content.locals&&(module.exports=content.locals)},1086:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(118)(!1)).push([module.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.mapbox .slice_container div {\n  padding-top: 0px;\n}\n',""])},1630:function(module,exports,__webpack_require__){module.exports=function(){"use strict";function sortKD(ids,coords,nodeSize,left,right,depth){if(!(right-left<=nodeSize)){var m=Math.floor((left+right)/2);!function select(ids,coords,k,left,right,inc){for(;right>left;){if(right-left>600){var n=right-left+1,m=k-left+1,z=Math.log(n),s=.5*Math.exp(2*z/3),sd=.5*Math.sqrt(z*s*(n-s)/n)*(m-n/2<0?-1:1),newLeft=Math.max(left,Math.floor(k-m*s/n+sd)),newRight=Math.min(right,Math.floor(k+(n-m)*s/n+sd));select(ids,coords,k,newLeft,newRight,inc)}var t=coords[2*k+inc],i=left,j=right;for(swapItem(ids,coords,left,k),coords[2*right+inc]>t&&swapItem(ids,coords,left,right);i<j;){for(swapItem(ids,coords,i,j),i++,j--;coords[2*i+inc]<t;)i++;for(;coords[2*j+inc]>t;)j--}coords[2*left+inc]===t?swapItem(ids,coords,left,j):swapItem(ids,coords,++j,right),j<=k&&(left=j+1),k<=j&&(right=j-1)}}(ids,coords,m,left,right,depth%2),sortKD(ids,coords,nodeSize,left,m-1,depth+1),sortKD(ids,coords,nodeSize,m+1,right,depth+1)}}function swapItem(ids,coords,i,j){swap(ids,i,j),swap(coords,2*i,2*j),swap(coords,2*i+1,2*j+1)}function swap(arr,i,j){var tmp=arr[i];arr[i]=arr[j],arr[j]=tmp}function sqDist(ax,ay,bx,by){var dx=ax-bx,dy=ay-by;return dx*dx+dy*dy}function kdbush(points,getX,getY,nodeSize,ArrayType){return new KDBush(points,getX,getY,nodeSize,ArrayType)}function KDBush(points,getX,getY,nodeSize,ArrayType){getX=getX||defaultGetX,getY=getY||defaultGetY,ArrayType=ArrayType||Array,this.nodeSize=nodeSize||64,this.points=points,this.ids=new ArrayType(points.length),this.coords=new ArrayType(2*points.length);for(var i=0;i<points.length;i++)this.ids[i]=i,this.coords[2*i]=getX(points[i]),this.coords[2*i+1]=getY(points[i]);sortKD(this.ids,this.coords,this.nodeSize,0,this.ids.length-1,0)}function defaultGetX(p){return p[0]}function defaultGetY(p){return p[1]}function SuperCluster(options){this.options=extend(Object.create(this.options),options),this.trees=new Array(this.options.maxZoom+1)}function createCluster(x,y,id,numPoints,properties){return{x:x,y:y,zoom:1/0,id:id,parentId:-1,numPoints:numPoints,properties:properties}}function getClusterJSON(cluster){return{type:"Feature",id:cluster.id,properties:getClusterProperties(cluster),geometry:{type:"Point",coordinates:[(x=cluster.x,360*(x-.5)),(y=cluster.y,y2=(180-360*y)*Math.PI/180,360*Math.atan(Math.exp(y2))/Math.PI-90)]}};var y,y2,x}function getClusterProperties(cluster){var count=cluster.numPoints,abbrev=count>=1e4?Math.round(count/1e3)+"k":count>=1e3?Math.round(count/100)/10+"k":count;return extend(extend({},cluster.properties),{cluster:!0,cluster_id:cluster.id,point_count:count,point_count_abbreviated:abbrev})}function lngX(lng){return lng/360+.5}function latY(lat){var sin=Math.sin(lat*Math.PI/180),y=.5-.25*Math.log((1+sin)/(1-sin))/Math.PI;return y<0?0:y>1?1:y}function extend(dest,src){for(var id in src)dest[id]=src[id];return dest}function getX(p){return p.x}function getY(p){return p.y}return KDBush.prototype={range:function(minX,minY,maxX,maxY){return function(ids,coords,minX,minY,maxX,maxY,nodeSize){for(var x,y,stack=[0,ids.length-1,0],result=[];stack.length;){var axis=stack.pop(),right=stack.pop(),left=stack.pop();if(right-left<=nodeSize)for(var i=left;i<=right;i++)x=coords[2*i],y=coords[2*i+1],x>=minX&&x<=maxX&&y>=minY&&y<=maxY&&result.push(ids[i]);else{var m=Math.floor((left+right)/2);x=coords[2*m],y=coords[2*m+1],x>=minX&&x<=maxX&&y>=minY&&y<=maxY&&result.push(ids[m]);var nextAxis=(axis+1)%2;(0===axis?minX<=x:minY<=y)&&(stack.push(left),stack.push(m-1),stack.push(nextAxis)),(0===axis?maxX>=x:maxY>=y)&&(stack.push(m+1),stack.push(right),stack.push(nextAxis))}}return result}(this.ids,this.coords,minX,minY,maxX,maxY,this.nodeSize)},within:function(x,y,r){return function(ids,coords,qx,qy,r,nodeSize){for(var stack=[0,ids.length-1,0],result=[],r2=r*r;stack.length;){var axis=stack.pop(),right=stack.pop(),left=stack.pop();if(right-left<=nodeSize)for(var i=left;i<=right;i++)sqDist(coords[2*i],coords[2*i+1],qx,qy)<=r2&&result.push(ids[i]);else{var m=Math.floor((left+right)/2),x=coords[2*m],y=coords[2*m+1];sqDist(x,y,qx,qy)<=r2&&result.push(ids[m]);var nextAxis=(axis+1)%2;(0===axis?qx-r<=x:qy-r<=y)&&(stack.push(left),stack.push(m-1),stack.push(nextAxis)),(0===axis?qx+r>=x:qy+r>=y)&&(stack.push(m+1),stack.push(right),stack.push(nextAxis))}}return result}(this.ids,this.coords,x,y,r,this.nodeSize)}},SuperCluster.prototype={options:{minZoom:0,maxZoom:16,radius:40,extent:512,nodeSize:64,log:!1,reduce:null,initial:function(){return{}},map:function(props){return props}},load:function(points){var log=this.options.log;log&&console.time("total time");var timerId="prepare "+points.length+" points";log&&console.time(timerId),this.points=points;for(var p,id,coords,clusters=[],i=0;i<points.length;i++)points[i].geometry&&clusters.push((p=points[i],id=i,coords=void 0,{x:lngX((coords=p.geometry.coordinates)[0]),y:latY(coords[1]),zoom:1/0,index:id,parentId:-1}));this.trees[this.options.maxZoom+1]=kdbush(clusters,getX,getY,this.options.nodeSize,Float32Array),log&&console.timeEnd(timerId);for(var z=this.options.maxZoom;z>=this.options.minZoom;z--){var now=+Date.now();clusters=this._cluster(clusters,z),this.trees[z]=kdbush(clusters,getX,getY,this.options.nodeSize,Float32Array),log&&console.log("z%d: %d clusters in %dms",z,clusters.length,+Date.now()-now)}return log&&console.timeEnd("total time"),this},getClusters:function(bbox,zoom){var minLng=((bbox[0]+180)%360+360)%360-180,minLat=Math.max(-90,Math.min(90,bbox[1])),maxLng=180===bbox[2]?180:((bbox[2]+180)%360+360)%360-180,maxLat=Math.max(-90,Math.min(90,bbox[3]));if(bbox[2]-bbox[0]>=360)minLng=-180,maxLng=180;else if(minLng>maxLng){var easternHem=this.getClusters([minLng,minLat,180,maxLat],zoom),westernHem=this.getClusters([-180,minLat,maxLng,maxLat],zoom);return easternHem.concat(westernHem)}for(var tree=this.trees[this._limitZoom(zoom)],ids=tree.range(lngX(minLng),latY(maxLat),lngX(maxLng),latY(minLat)),clusters=[],i=0;i<ids.length;i++){var c=tree.points[ids[i]];clusters.push(c.numPoints?getClusterJSON(c):this.points[c.index])}return clusters},getChildren:function(clusterId){var originId=clusterId>>5,originZoom=clusterId%32,errorMsg="No cluster with the specified id.",index=this.trees[originZoom];if(!index)throw new Error(errorMsg);var origin=index.points[originId];if(!origin)throw new Error(errorMsg);for(var r=this.options.radius/(this.options.extent*Math.pow(2,originZoom-1)),ids=index.within(origin.x,origin.y,r),children=[],i=0;i<ids.length;i++){var c=index.points[ids[i]];c.parentId===clusterId&&children.push(c.numPoints?getClusterJSON(c):this.points[c.index])}if(0===children.length)throw new Error(errorMsg);return children},getLeaves:function(clusterId,limit,offset){limit=limit||10,offset=offset||0;var leaves=[];return this._appendLeaves(leaves,clusterId,limit,offset,0),leaves},getTile:function(z,x,y){var tree=this.trees[this._limitZoom(z)],z2=Math.pow(2,z),extent=this.options.extent,p=this.options.radius/extent,top=(y-p)/z2,bottom=(y+1+p)/z2,tile={features:[]};return this._addTileFeatures(tree.range((x-p)/z2,top,(x+1+p)/z2,bottom),tree.points,x,y,z2,tile),0===x&&this._addTileFeatures(tree.range(1-p/z2,top,1,bottom),tree.points,z2,y,z2,tile),x===z2-1&&this._addTileFeatures(tree.range(0,top,p/z2,bottom),tree.points,-1,y,z2,tile),tile.features.length?tile:null},getClusterExpansionZoom:function(clusterId){for(var clusterZoom=clusterId%32-1;clusterZoom<this.options.maxZoom;){var children=this.getChildren(clusterId);if(clusterZoom++,1!==children.length)break;clusterId=children[0].properties.cluster_id}return clusterZoom},_appendLeaves:function(result,clusterId,limit,offset,skipped){for(var children=this.getChildren(clusterId),i=0;i<children.length;i++){var props=children[i].properties;if(props&&props.cluster?skipped+props.point_count<=offset?skipped+=props.point_count:skipped=this._appendLeaves(result,props.cluster_id,limit,offset,skipped):skipped<offset?skipped++:result.push(children[i]),result.length===limit)break}return skipped},_addTileFeatures:function(ids,points,x,y,z2,tile){for(var i=0;i<ids.length;i++){var c=points[ids[i]],f={type:1,geometry:[[Math.round(this.options.extent*(c.x*z2-x)),Math.round(this.options.extent*(c.y*z2-y))]],tags:c.numPoints?getClusterProperties(c):this.points[c.index].properties},id=c.numPoints?c.id:this.points[c.index].id;void 0!==id&&(f.id=id),tile.features.push(f)}},_limitZoom:function(z){return Math.max(this.options.minZoom,Math.min(z,this.options.maxZoom+1))},_cluster:function(points,zoom){for(var clusters=[],r=this.options.radius/(this.options.extent*Math.pow(2,zoom)),i=0;i<points.length;i++){var p=points[i];if(!(p.zoom<=zoom)){p.zoom=zoom;var tree=this.trees[zoom+1],neighborIds=tree.within(p.x,p.y,r),numPoints=p.numPoints||1,wx=p.x*numPoints,wy=p.y*numPoints,clusterProperties=null;this.options.reduce&&(clusterProperties=this.options.initial(),this._accumulate(clusterProperties,p));for(var id=(i<<5)+(zoom+1),j=0;j<neighborIds.length;j++){var b=tree.points[neighborIds[j]];if(!(b.zoom<=zoom)){b.zoom=zoom;var numPoints2=b.numPoints||1;wx+=b.x*numPoints2,wy+=b.y*numPoints2,numPoints+=numPoints2,b.parentId=id,this.options.reduce&&this._accumulate(clusterProperties,b)}}1===numPoints?clusters.push(p):(p.parentId=id,clusters.push(createCluster(wx/numPoints,wy/numPoints,id,numPoints,clusterProperties)))}}return clusters},_accumulate:function(clusterProperties,point){var properties=point.numPoints?point.properties:this.options.map(this.points[point.index].properties);this.options.reduce(clusterProperties,properties)}},function(options){return new SuperCluster(options)}}()},894:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=exports.DEFAULT_POINT_RADIUS=exports.DEFAULT_MAX_ZOOM=void 0;var _react=_interopRequireDefault(__webpack_require__(0)),_propTypes=_interopRequireDefault(__webpack_require__(2)),_reactMapGl=_interopRequireDefault(__webpack_require__(1031)),_immutable=_interopRequireDefault(__webpack_require__(1038)),_viewportMercatorProject=_interopRequireDefault(__webpack_require__(980)),_ScatterPlotGlowOverlay=_interopRequireDefault(__webpack_require__(1082));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return(_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c])Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a}).apply(this,arguments)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}__webpack_require__(1085);exports.DEFAULT_MAX_ZOOM=16;exports.DEFAULT_POINT_RADIUS=60;var propTypes={width:_propTypes.default.number,height:_propTypes.default.number,aggregatorName:_propTypes.default.string,clusterer:_propTypes.default.object,globalOpacity:_propTypes.default.number,hasCustomMetric:_propTypes.default.bool,mapStyle:_propTypes.default.string,mapboxApiKey:_propTypes.default.string.isRequired,onViewportChange:_propTypes.default.func,pointRadius:_propTypes.default.number,pointRadiusUnit:_propTypes.default.string,renderWhileDragging:_propTypes.default.bool,rgb:_propTypes.default.array,bounds:_propTypes.default.array},defaultProps={width:400,height:400,globalOpacity:1,onViewportChange:function(){},pointRadius:60,pointRadiusUnit:"Pixels"},MapBox=function(a){function b(b){var c=a.call(this,b)||this,d=c.props,e=d.width,f=d.height,g=d.bounds,h=new _viewportMercatorProject.default({width:e,height:f}).fitBounds(g),i=h.latitude,j=h.longitude,k=h.zoom;return c.state={viewport:{longitude:j,latitude:i,zoom:k}},c.handleViewportChange=c.handleViewportChange.bind(_assertThisInitialized(_assertThisInitialized(c))),c}!function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a);var c=b.prototype;return c.handleViewportChange=function(a){this.setState({viewport:a}),(0,this.props.onViewportChange)(a)},c.render=function(){var a=this.props,b=a.width,c=a.height,d=a.aggregatorName,e=a.clusterer,f=a.globalOpacity,g=a.mapStyle,h=a.mapboxApiKey,i=a.pointRadius,j=a.pointRadiusUnit,k=a.renderWhileDragging,l=a.rgb,m=a.hasCustomMetric,n=a.bounds,o=this.state.viewport,p=void 0!==o.isDragging&&o.isDragging,q=[n[0][0],n[0][1],n[1][0],n[1][1]],r=e.getClusters(q,Math.round(o.zoom));return _react.default.createElement(_reactMapGl.default,_extends({},o,{mapStyle:g,width:b,height:c,mapboxApiAccessToken:h,onViewportChange:this.handleViewportChange}),_react.default.createElement(_ScatterPlotGlowOverlay.default,_extends({},o,{isDragging:p,locations:_immutable.default.fromJS(r),dotRadius:i,pointRadiusUnit:j,rgb:l,globalOpacity:f,compositeOperation:"screen",renderWhileDragging:k,aggregation:m?d:null,lngLatAccessor:function(a){var b=a.get("geometry").get("coordinates");return[b.get(0),b.get(1)]}})))},b}(_react.default.Component);MapBox.propTypes=propTypes,MapBox.defaultProps=defaultProps;var _default=MapBox;exports.default=_default},904:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=function(a){var b=a.width,c=a.height,d=a.formData,e=a.onError,f=a.payload,g=a.setControlValue,h=void 0===g?function(){}:g,i=f.data,j=i.bounds,k=i.geoJSON,l=i.hasCustomMetric,m=i.mapboxApiKey,n=d.clusteringRadius,o=d.globalOpacity,p=d.mapboxColor,q=d.mapboxStyle,r=d.pandasAggfunc,s=d.pointRadius,t=d.pointRadiusUnit,u=d.renderWhileDragging,v=/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.exec(p);if(null===v)return e("Color field must be of form 'rgb(%d, %d, %d)'"),{};var w={maxZoom:_MapBox.DEFAULT_MAX_ZOOM,radius:n};l&&(w.initial=function(){return{sum:0,squaredSum:0,min:1/0,max:-1/0}},w.map=function(a){return{sum:a.metric,squaredSum:Math.pow(a.metric,2),min:a.metric,max:a.metric}},w.reduce=function(a,b){a.sum+=b.sum,a.squaredSum+=b.squaredSum,a.min=Math.min(a.min,b.min),a.max=Math.max(a.max,b.max)});var x=(0,_supercluster.default)(w);return x.load(k.features),{width:b,height:c,aggregatorName:r,bounds:j,clusterer:x,globalOpacity:o,hasCustomMetric:l,mapboxApiKey:m,mapStyle:q,onViewportChange:function(a){var b=a.latitude,c=a.longitude,d=a.zoom;h("viewport_longitude",c),h("viewport_latitude",b),h("viewport_zoom",d)},pointRadius:"Auto"===s?_MapBox.DEFAULT_POINT_RADIUS:s,pointRadiusUnit:t,renderWhileDragging:u,rgb:v}};var a,_supercluster=(a=__webpack_require__(1630))&&a.__esModule?a:{default:a},_MapBox=__webpack_require__(894)}}]);
//# sourceMappingURL=15.a2ec2c33ba01cd68b610.bundle.js.map