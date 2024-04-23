import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useRef, useEffect } from "react";
import { Sidebar, ISidebar } from "../components/Sidebar";


const AppLayout = () => {

    
    return (<>
        <main className={`flex h-screen w-screen justify-start overflow-hidden relative`}>

            <Sidebar app={AppSideBar.app} droplist={AppSideBar.droplist} foot={AppSideBar.foot} />

            <div className={`overflow-hidden flex-1 w-[calc(100vh-5rem)] h-screen flex-col`}>
                <div className="h-[8%]">
                    <Header />
                </div>
                <div className="p-8 flex-1 h-[92%] overflow-y-scroll">
                    <Outlet />
                </div>
            </div>


            <Footer />
        </main>
    </>)
}


const AppSideBar : ISidebar = {
    app: {
            title: "BackOffice DGE",
            link: document.createElement("a"),
            logo: "flag.png"
    },
    droplist: [
        {group: "Parrainages", link: [
            {to: "/parrainages/nouveau", name: "Nouveau parrainage", icon: ""},
            {to: "/parrainages/historique", name: "Historique", icon: ""},
            // {to: "/parrainages/statistique", name: "Statistiques", icon: ""},
        ]},
        {group: "Candidats", link: [
            {to: "/candidats/nouveau", name: "Nouveau candidat", icon: ""},
            {to: "/candidats/liste", name: "Liste des candidats", icon: ""},
            // {to: "/candidats/statistique", name: "Statistiques", icon: ""},
        ]},
        {group: "Electeurs", link: [
            {to: "/electeurs/liste", name: "Liste des électeurs", icon: ""},
            // {to: "/electeurs/statistique", name: "Statistiques", icon: ""},
        ]},
        
    ],
    foot: {
        link: document.createElement("a"),
        icon: "/assets/logout.svg"
    } 
}

export default AppLayout;