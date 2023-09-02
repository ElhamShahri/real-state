const Footer = () => {
  return (
    <div className="flex justify-between bg-blue-700 rounded-md text-white p-5 my-5">
      <div className=" w-2/3 flex flex-col gap-1">
        <h3>سامانه خرید و اجاره املاک</h3>
        <p className="font-light text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>
      <div className="font-light mx-3 ">
        <ul className="list-disc ">
          <li >تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
