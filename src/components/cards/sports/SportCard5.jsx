import '../../../index.css';
import kickbox from '../../../assets/images/sports/kickbox.jpeg';

function SportCard5() {
    return (
        <>
            <div className="border-4 border-primary rounded-xl flex-col sm:flex-row w-full sm:w-10/12 lg:w-8/12 mx-auto mb-8">
                {/* تصویر */}
                <img
                    src={kickbox}
                    alt="kickbox"
                    className="rounded-t-xl w-full h-48 object-cover sm:order-2"
                />

                {/* متن */}
                <div className="text-right p-4 sm:p-5 flex-col justify-center sm:order-1">
                    <div className="text-lg sm:text-2xl font-medium">
                        کیک بوکسینگ
                    </div>
                    <div className="text-sm sm:text-base font-regular text-justify pt-2 sm:pt-4">
                      کیک بوکسینگ یک ورزش هیجان‌انگیز و پُرجنب‌وجوش است که ترکیبی از تکنیک‌های مشت‌زنی و ضربات پا را به شما آموزش می‌دهد! این ورزش نه تنها به تقویت قدرت بدنی و استقامت شما کمک می‌کند، بلکه به شما اعتماد به نفس و مهارت‌های دفاع شخصی می‌آموزد. با کیک بوکسینگ، هر جلسه تمرین یک مبارزه با استرس و یک جشن برای سلامتی است!
                    </div>
                </div>
            </div>
        </>
    );
}

export default SportCard5;
