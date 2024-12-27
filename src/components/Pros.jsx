import '../index.css';
import ProCard1 from './cards/pros/ProCard1.jsx';
import ProCard2 from './cards/pros/ProCard2.jsx';
import ProCard3 from './cards/pros/ProCard3.jsx';

function Pros() {
    return (
        <>
            <div className="pt-24 px-4 sm:px-10 lg:px-20">
                {/* عنوان */}
                <div className="text-2xl sm:text-3xl font-medium text-center" dir="rtl">
                    مزایای باشگاه کیانپور
                </div>

                {/* کارت‌ها */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 place-items-center"
                    dir="rtl"
                >
                    <ProCard1 />
                    <ProCard2 />
                    <ProCard3 />
                </div>
            </div>
        </>
    );
}

export default Pros;
