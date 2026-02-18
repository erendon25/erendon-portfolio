import posImg from '../assets/pos-preview.svg';
import realEstateImg from '../assets/real-estate-preview.svg';
import scheduleImg from '../assets/schedule-preview.svg';
import loansImg from '../assets/loans-preview.svg';
import supplementsImg from '../assets/supplements-preview.svg';
import expirationImg from '../assets/expiration-preview.svg';

export const projects = [
    {
        id: 1,
        title: "POS Abarrotes",
        description: "A complete Point of Sale system for grocery stores, featuring inventory management, sales tracking, and barcode scanning.",
        description_es: "Un sistema completo de Punto de Venta para tiendas de abarrotes, con gestión de inventario, seguimiento de ventas y escaneo de códigos de barras.",
        tech: ["React", "Node.js", "Electron", "SQL"],
        repoUrl: "https://github.com/erendon25/pos-abarrotes",
        image: posImg
    },
    {
        id: 2,
        title: "Inmobiliaria Inmuevete",
        description: "Real estate platform for managing property listings, client interactions, and visit scheduling.",
        description_es: "Plataforma inmobiliaria para gestionar listados de propiedades, interacciones con clientes y programación de visitas.",
        tech: ["React", "Firebase", "Tailwind CSS"],
        repoUrl: "https://github.com/erendon25/inmobiliaria",
        image: realEstateImg
    },
    {
        id: 3,
        title: "Horarios",
        description: "Employee schedule management system with shift planning, holiday tracking, and work hour calculations.",
        description_es: "Sistema de gestión de horarios de empleados con planificación de turnos, seguimiento de vacaciones y cálculos de horas de trabajo.",
        tech: ["JavaScript", "React", "CSS"],
        repoUrl: "https://github.com/erendon25/horarios",
        image: scheduleImg
    },
    {
        id: 4,
        title: "Prestamista",
        description: "Loan management application for tracking borrowers, payments, and interest calculations.",
        description_es: "Aplicación de gestión de préstamos para el seguimiento de prestatarios, pagos y cálculos de intereses.",
        tech: ["Web Tech", "Database"], // Placeholder tech
        repoUrl: "https://github.com/erendon25/Prestamista",
        image: loansImg
    },
    {
        id: 5,
        title: "Suplementos",
        description: "E-commerce platform for selling nutritional supplements with product catalog and cart functionality.",
        description_es: "Plataforma de comercio electrónico para la venta de suplementos nutricionales con catálogo de productos y funcionalidad de carrito.",
        tech: ["E-commerce", "React"],
        repoUrl: "https://github.com/erendon25/suplementos",
        image: supplementsImg
    },
    {
        id: 6,
        title: "Vencimientos",
        description: "System for tracking product expiration dates to minimize waste and ensure quality control.",
        description_es: "Sistema para el seguimiento de fechas de vencimiento de productos para minimizar desperdicios y asegurar el control de calidad.",
        tech: ["Management", "Utilities"],
        repoUrl: "https://github.com/erendon25/vencimientos",
        image: expirationImg
    }
];
