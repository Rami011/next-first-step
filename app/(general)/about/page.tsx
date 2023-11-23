import { Metadata } from "next";



export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Esta es la pagina de contacto',
    keywords:['About Page','Ramiro','Informacion']
};

export default function AboutPage(){
    return (
        
            <span className="text-4xl">About Page</span>
        
    )
}