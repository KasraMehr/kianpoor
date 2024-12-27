import '../../../index.css';
import pilates from '../../../assets/images/sports/pilates.jpeg';

function SportCard4() {
    return (
        <>
            <div className="border-4 border-primary rounded-xl flex-col sm:flex-row w-full sm:w-10/12 lg:w-8/12 mx-auto mb-8">
                {/* تصویر */}
                <img
                    src={pilates}
                    alt="pilates"
                    className="rounded-t-xl w-full h-48 object-cover sm:order-2"
                />

                {/* متن */}
                <div className="text-right p-4 sm:p-5 flex-col justify-center sm:order-1">
                    <div className="text-lg sm:text-2xl font-medium">
                        پیلاتس
                    </div>
                    <div className="text-sm sm:text-base font-regular text-justify pt-2 sm:pt-4">
                      پیلاتس یک تمرین فوق‌العاده برای تقویت عضلات مرکزی بدن و بهبود انعطاف‌پذیری است که با حرکات کنترل‌شده و تنفس هماهنگ، شما را به آرامش ذهنی و جسمی می‌رساند! این روش نه تنها به فرم‌دهی بدن کمک می‌کند، بلکه انرژی شما را افزایش و استرس را کاهش می‌دهد. بیایید با پیلاتس، قدرت و آرامش را در کنار هم تجربه کنیم!
                    </div>
                </div>
            </div>
        </>
    );
}

export default SportCard4;
