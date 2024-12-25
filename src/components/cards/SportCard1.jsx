import '../../index.css';
import taekwondo from '../../assets/images/taekwondo.png';

function SportCard1() {
    return (
        <>
            <div className="border-4 border-primary rounded-xl flex flex-col sm:flex-row w-full sm:w-10/12 lg:w-8/12 mx-auto mb-8">
                {/* تصویر */}
                <img
                    src={taekwondo}
                    alt="taekwondo"
                    className="rounded-t-xl w-full sm:w-1/3 sm:rounded-none sm:rounded-l-xl h-48 sm:h-auto object-cover sm:order-2"
                />

                {/* متن */}
                <div className="text-right p-4 sm:p-5 flex flex-col justify-center sm:order-1">
                    <div className="text-lg sm:text-2xl font-semibold">
                        تکواندو
                    </div>
                    <div className="text-sm sm:text-base font-medium text-justify pt-2 sm:pt-4">
                        تکواندو یک ورزش المپیکی دارای سابقه طولانی بوده و به هنرجو قدرت، اعتماد به نفس، انعطاف و حس برتری میدهد.
                        این رشته برای تمامی سنین مناسب میباشد و باعث سلامت جسم و کاهش استرس میشود.
                    </div>
                </div>
            </div>
        </>
    );
}

export default SportCard1;
