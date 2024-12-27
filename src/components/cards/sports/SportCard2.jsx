import '../../../index.css';
import basketball from '../../../assets/images/sports/basketball.jpeg';

function SportCard2() {
    return (
        <>
            <div className="border-4 border-primary rounded-xl flex-col sm:flex-row w-full sm:w-10/12 lg:w-8/12 mx-auto mb-8">
                {/* تصویر */}
                <img
                    src={basketball}
                    alt="basketball"
                    className="rounded-t-xl w-full h-48 object-cover sm:order-2"
                />

                {/* متن */}
                <div className="text-right p-4 sm:p-5 flex-col justify-center sm:order-1">
                    <div className="text-lg sm:text-2xl font-medium">
                        بسکتبال
                    </div>
                    <div className="text-sm sm:text-base font-regular text-justify pt-2 sm:pt-4">
                      بسکتبال یک ورزش هیجان‌انگیز و پرتحرک است که در آن سرعت، دقت و کار تیمی حرف اول را می‌زند! با هر پرتاب توپ به سمت سبد، آدرنالین شما بالا می‌رود و حس رقابت را تجربه می‌کنید. بیایید به زمین برویم و با هم به سوی پیروزی حرکت کنیم!
                    </div>
                </div>
            </div>
        </>
    );
}

export default SportCard2;
