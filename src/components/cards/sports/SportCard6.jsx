import '../../../index.css';
import gymnastics from '../../../assets/images/sports/gymnastics.jpeg';

function SportCard6() {
    return (
        <>
            <div className="border-4 border-primary rounded-xl flex-col sm:flex-row w-full sm:w-10/12 lg:w-8/12 mx-auto mb-8">
                {/* تصویر */}
                <img
                    src={gymnastics}
                    alt="gymnastics"
                    className="rounded-t-xl w-full h-48 object-cover sm:order-2"
                />

                {/* متن */}
                <div className="text-right p-4 sm:p-5 flex-col justify-center sm:order-1">
                    <div className="text-lg sm:text-2xl font-medium">
                        ژیمناستیک
                    </div>
                    <div className="text-sm sm:text-base font-regular text-justify pt-2 sm:pt-4">
                      ژیمناستیک یک ورزش شگفت‌انگیز و پرانرژی است که به شما امکان می‌دهد با ترکیب حرکات بدنی زیبا و قدرتی، به اوج توانایی‌های جسمانی خود برسید! این ورزش نه تنها انعطاف‌پذیری و تعادل شما را بهبود می‌بخشد، بلکه اعتماد به نفس و روحیه رقابتی شما را نیز تقویت می‌کند. بیایید با هم به دنیای شگفت‌انگیز ژیمناستیک وارد شویم و مهارت‌های جدیدی را کشف کنیم!
                    </div>
                </div>
            </div>
        </>
    );
}

export default SportCard6;
