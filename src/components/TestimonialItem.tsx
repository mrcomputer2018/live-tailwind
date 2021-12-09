export const TestimonialItem = () => {
    return (
        <div className="bg-gray-200 p-8 shadow-md rounded-lg overflow-hidden md:flex md:p-0">
            <img className="w-50 h-50 rounded-full mx-auto md:rounded-none md: w-50 md:h-auto" src="./imagem.jpg" alt="" />
            <div className="pt-6 text-center space-y-4 md:p-5">
                <div className="text-lg font semi-bold">
                    Over 400+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content. 
                </div>
                <div className="font-medium">
                    <div className="text-gray-600 font-bold">Silva Jardim</div>
                    <div className="text-gray-400">Aluno FamaDev</div>
                </div>
            </div>
        </div>
    );
}