<h1> NEIGHBOURLY </h1>

<details>
<summary>Table of Contents</summary>
<br>
 <ol> 
    <li> <a href="#about"> About the Project </a></li>
    <li> <a href="#website"> Website </a></li>
    <li> <a href="#features"> Features </a></li>
    <li> <a href="#tech-used"> Technologies Used </a></li>
    <li> <a href="#rationale"> Rationale for Choice of Technologies </a></li>
    <li> <a href="#repo-links"> Repo Links </a></li>
    <li> <a href="#contributors"> Contributors </a></li>
  </ol>
</details>

<div id="about">
 <h2> About the Project </h2>
 NEIGHBOURLY is a community app that builds a greater sense of belonging amongst neighbours.
 <br/>
 It provides an avenue for users to give away pre-loved items to neighbours, discover and develop shared interests and chat with one another, all of which  collectively fosters a sense of community.
</div>
 
<div id="website">
<h2> Website </h2>
<== to be deployed ==>
</div>

<h2 id="features"> Features </h2>

<h3> 1. Give Away Pre-Owned Items </h3>
   <ul>
   <li>
     Browse through marketplace containing items that other users want to give away.</li>
    <li>Chat with owners to find out more and arrange a pick-up.</li>
     </ul>
     
  ![hmd_contact_seller_hagrid](https://user-images.githubusercontent.com/85098526/162903993-fe788b6e-04a9-4e3e-96b7-7cbaf7605dd6.gif)
 
   <ul>
     <li> List items that you want to give away.</li>
     <li>Delete listing once the item has been given away.</li>
     <li>View all your listed items.</li>
  </ul>
  
  ![hmd_add_item](https://user-images.githubusercontent.com/85098526/162903967-5020cb53-e95d-47df-b02e-c86c5feb67a2.gif)

  <h3> 2. Interact with Neighbours Through Interest Groups </h3>
 <ul>
   <li>Browse through interest groups in your neighbourhood.</li>
   <li>Join interest groups to be to able like posts or see the full list of members.</li>
  </ul>
  
![ig_join_comment](https://user-images.githubusercontent.com/85098526/162904010-36454297-cbb5-404d-b1a1-27e726447b81.gif)
   <ul>
    <li> Start a new interest group.</li>
   </ul>
  
  ![ig_add](https://user-images.githubusercontent.com/85098526/162904006-2dc6e2bd-4939-4902-8854-552a1ff6b60d.gif)
 
<h3> 3. Chat with Neighbours </h3>
 <ul>
  <li> ==============</li>
 </ul>
 
 <h3> 4. Accessibility</h3>
 <ul>
  <li> Easily navigate from one page to another with menu buttons throughout the app.</li>
 </ul>
 
 ![accessibility](https://user-images.githubusercontent.com/85098526/162932480-abd07b16-a7dd-43e7-8d4a-6d8e911f9906.gif)

 
<div id="tech-used">
<h2> Technologies Used </h2>
 
 <h3>Frontend</h3>
 
 User Interface:
 <ul>
  <li><a href="https://reactjs.org/" target="_blank"> React.js <a/></li>
 </ul>
 
  Component Routing:
 <ul>
  <li><a href="https://reactrouter.com/" target="_blank"> React Router <a/></li>
 </ul>
 
 CSS Framework:
 <ul>
  <li><a href="https://mui.com/" target="_blank"> Material UI <a/></li> 
 </ul>
 
 Live Chatroom:
 <ul>
   <li><a href="https://socket.io/" target="_blank"> Socket.IO <a/></li>
 </ul>
 
 <h3> Backend </h3>
 
 Server:
 <ul>
   <li><a href="https://expressjs.com/" target="_blank"> Express.js <a/></li>
 </ul>
 
  Database:
 <ul>
   <li><a href="https://www.mongodb.com/docs/atlas/" target="_blank"> MongoDB Atlas <a/></li> 
   <li><a href="https://mongoosejs.com/" target="_blank"> Mongoose <a/></li>
 </ul>
 
   Authentication:
 <ul>
   <li><a href="https://jwt.io/" target="_blank"> JSON Web Token <a/></li>
 </ul>
 
 
  Live Chatroom:
 <ul>
   <li><a href="https://socket.io/" target="_blank"> Socket.IO <a/></li>
 </ul>
 
</div>

<div id="rationale">
<h2> Rationale for Choice of Technologies  </h2>

<h3> MongoDB </h3>
 <b>Reason for Choosing a NoSQL Database: </b>
<ul>
 <li> Due to a short development time, we required a flexible schema that would allow us to make changes quickly and easily as requirements changed. </li>
 <li> The size and complexity of the app meant that a lot of information was being accessed by the various components. <br/> This would have required multiple join tables if a SQL database was used. <br/> MongoDB allowed us to embed information, allowing for ease of storage and access of data.<br/> Since we had sets of data which needed to be queried alongside one another, a NoSQL database was better suited as it removed the need for multiple queries and joins. </li>
</ul>
 
<h3> Socket.IO </h3>
<ul>
 <li> Our desire to implement a live chatroom necessitated a Javascript library with such capabilities. </li>
 <li> Socket.IO's ability to enable real-time, bi-directional communication between the clients and our servers suited this need. </li>
</ul>

 <h3> JSON Web Token </h3>
 <ul>
 <li> We chose JSON Web Tokens as our method of authentication due to its increased security through its digital signature capabilities. </li>
  </ul>
</div>

<div id="repo-links">
<h2> Repo Links  </h2>

 <ul>
  <li><a href="https://github.com/shannonssd/project-5-frontend" target="_blank"> Frontend<a/></li>
   <li><a href="https://github.com/shannonssd/project-5-backend" target="_blank"> Backend<a/></li>
 </ul>
 
</div>

<h2 id="contributors"> Contributors </h2>

Hsiu Ping Gay | <a href="https://www.linkedin.com/in/hsiupinggay" target="_blank"> LinkedIn<a/>

Shannon Suresh | <a href="https://www.linkedin.com/in/shannon-suresh" target="_blank"> LinkedIn<a/>
