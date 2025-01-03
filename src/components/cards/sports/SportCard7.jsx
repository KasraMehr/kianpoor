import '../../../index.css';
import ninjutsu from '../../../assets/images/sports/ninjutsu.jpeg';

function SportCard7() {
    return (
        <>
            <div className="border-4 border-primary rounded-xl flex-col sm:flex-row w-full sm:w-10/12 lg:w-8/12 mx-auto mb-8">
                {/* تصویر */}
                <img
                    src={ninjutsu}
                    alt="ninjutsu"
                    className="rounded-t-xl w-full h-48 object-cover sm:order-2"
                />

                {/* متن */}
                <div className="text-right p-4 sm:p-5 flex-col justify-center sm:order-1">
                    <div className="text-lg sm:text-2xl font-medium">
                        نینجوتسو
                    </div>
                    <div className="text-sm sm:text-base font-regular text-justify pt-2 sm:pt-4">
                      نینجوتسو یک هنر رزمی باستانی ژاپنی است که به هنرجویان مهارت‌های استراتژیک، خلاقیت و توانایی‌های جسمانی را آموزش می‌دهد. این هنر نه‌تنها شامل تکنیک‌های مبارزه و دفاع شخصی است، بلکه بر تمرکز ذهن و تقویت روحیه نیز تأکید دارد. با نینجوتسو، شما به دنیای هیجان‌انگیز و اسرارآمیز نینجاها وارد می‌شوید و قدرت‌های نهفته‌تان را کشف می‌کنید!
                    </div>
                </div>
            </div>
        </>
    );
}

export default SportCard7;
