/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 
 import Header from "./headerLayout"
 import Logic from "./logicPage"
 import "../assets/css/style.css"
 
 const Layout = ({ children }) => {
   
 
   return (
     <>
     <Logic/>
       <Header />
       <div className="main">
           {children}
       </div>
 
     </>
   )
 }
 
 export default Layout
 