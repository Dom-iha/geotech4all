import TestimonialSlider from '../ui/testimonial-slider';
import TestimonialSliderMobile from '../ui/testimonial-slider-mobile';

function TestimonialSection() {
  return (
    <section className='px-6 md:px-8 lg:px-20 py-10'>
      <div className='flex flex-col gap-2 my-10 md:my-16 lg:my-20 text-center'>
        <h2 className='text-2xl lg:text-4xl font-bold'>What People Say</h2>
        <p className='lg:text-lg'>
          Discover what our students have to say about their experience
        </p>
      </div>
      <TestimonialSlider />
      <TestimonialSliderMobile />
    </section>
  );
}

export default TestimonialSection;
