import '../../index.css';
import footsal from '../../assets/images/footsal.png';

function SportCard1() {
    return (
        <>
            <div className="border-4 border-primary rounded-xl flex-col sm:flex-row w-full sm:w-10/12 lg:w-8/12 mx-auto mb-8">
                {/* تصویر */}
                <img
                    src={footsal}
                    alt="footsal"
                    className="rounded-t-xl w-full h-48 object-cover sm:order-2"
                />

                {/* متن */}
                <div className="text-right p-4 sm:p-5 flex-col justify-center sm:order-1">
                    <div className="text-lg sm:text-2xl font-medium">
                        فوتسال
                    </div>
                    <div className="text-sm sm:text-base font-regular text-justify pt-2 sm:pt-4">
                        فوتسال، هیجان و تکنیک را در یک زمین کوچک به اوج می‌رساند! با حرکات خیره‌کننده، هر بازی به یک نمایش بی‌نظیر تبدیل می‌شود که قلبتان را به تپش می‌اندازد!
                    </div>
                </div>
            </div>
        </>
    );
}

export default SportCard1;
