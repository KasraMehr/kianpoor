import '../../../index.css';
import hapkido from '../../../assets/images/sports/hapkido.jpeg';

function SportCard3() {
    return (
        <>
            <div className="border-4 border-primary rounded-xl flex-col sm:flex-row w-full sm:w-10/12 lg:w-8/12 mx-auto mb-8">
                {/* تصویر */}
                <img
                    src={hapkido}
                    alt="hapkido"
                    className="rounded-t-xl w-full h-48 object-cover sm:order-2"
                />

                {/* متن */}
                <div className="text-right p-4 sm:p-5 flex-col justify-center sm:order-1">
                    <div className="text-lg sm:text-2xl font-medium">
                        توتال هاپکیدو GHF
                    </div>
                    <div className="text-sm sm:text-base font-regular text-justify pt-2 sm:pt-4">
                      توتال هاپکیدو یک هنر رزمی هیجان‌انگیز و جامع است که به شما قدرت، انعطاف‌پذیری و اعتماد به نفس می‌بخشد! با ترکیب تکنیک‌های ضربه‌ای، قفل مفاصل و پرتاب‌ها، شما را برای مقابله با هر چالشی آماده می‌کند. بیایید با هم به دنیای مبارزه و دفاع شخصی وارد شویم و مهارت‌های جدیدی را کشف کنیم!
                    </div>
                </div>
            </div>
        </>
    );
}

export default SportCard3;
