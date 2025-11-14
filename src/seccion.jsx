
function Seccion({
    children,
    imagen = "/public/logo-fravelz.jpg", alt = "Imagen",
    titulo = "Titulo", enlace = "#", textoEnlace = "Ir a proyecto",
    parrafo_default="true", target="_blank"
}) {
    return (
        <>
            <h3 className="
            text-xl font-bold mb-2
            ">{titulo}</h3>

            <div className="
            w-full my-3
            flex flex-col gap-4
            lg:flex-row
            lg:gap-2
            ">
                <img draggable="false" className="
                h-50 min-w-50
                bg-gray-800
                rounded-2xl
                object-contain
                select-none
                " src={imagen} alt="Imagen"></img>

                <div className="
                ml-4
                text-gray-300
                flex flex-col gap-4
                ">
                    { parrafo_default==="true" ? 
                    <p className="
                    wrap-break-word
                    min-w-0
                    text-justify
                    ">
                        {children}
                    </p>
                    : (
                        children
                    )}
                    <a target={target} href={enlace} className="
                    text-blue-400 hover:underline
                    underline
                    cursor-pointer
                    ">{textoEnlace}</a>
                </div>
            </div>
        </>
    );
}

export default Seccion;
