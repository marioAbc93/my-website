/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 
 class Logic extends React.Component {
   
   componentDidMount() {
     const navToggler = document.querySelector(".nav-toggler");
     navToggler.addEventListener("click", ()=>{
         hideSection();
         toggleNavbar();
         document.body.classList.toggle("hide-scrolling")
     });
     function hideSection(){
         document.querySelector("section.active").classList.toggle("fade-out");
     }
     function toggleNavbar(){
         document.querySelector(".header").classList.toggle("active");
     }
 
     /* Active section */
     document.addEventListener("click", (e)=>{
         if(e.target.classList.contains("link-item") && e.target.hash !== ""){
             if(e.target.classList.contains("nav-item")){
                 toggleNavbar(); 
             }else{
                 console.log("false");
             } 
             setTimeout(()=>{
                 document.querySelector("section.active").classList.remove("active", "fade-out");
                 document.querySelector(e.target.hash).classList.add("active");
                 window.scrollTo(0,0);
                 document.body.classList.remove("hide-scrolling");
             },500); 
         }
     });
     /* Pestañas */
     const tabsContainer = document.querySelector(".about-tabs"), 
           aboutSection = document.querySelector(".about-section");
     tabsContainer.addEventListener("click", (e)=>{
         if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
             tabsContainer.querySelector(".active").classList.remove("active");
             e.target.classList.add("active");
             const target = e.target.getAttribute("data-tab");
             aboutSection.querySelector(".tab-content.active").classList.remove("active");
             aboutSection.querySelector(target).classList.add("active");
         }
     });
     /*Switch*/
     const btnSwitch = document.querySelector('#switch');
 
     btnSwitch.addEventListener('click', () => {
       document.body.classList.toggle('light');
       btnSwitch.classList.toggle('active');
 
       // Guardamos el modo en localstorage.
       if(document.body.classList.contains('light')){
         localStorage.setItem('light-mode', 'true');
       } else {
         localStorage.setItem('light-mode', 'false');
       }
     });
 
     // Obtenemos el modo actual.
     if(localStorage.getItem('light-mode') === 'true'){
       document.body.classList.add('light');
       btnSwitch.classList.add('active');
     } else {
       document.body.classList.remove('light');
       btnSwitch.classList.remove('active');
     } 
 
     
   }
 
   
   render() {
     return (
        <>
        </>
     )
   }
 }
 
 export default Logic;