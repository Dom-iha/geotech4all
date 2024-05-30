import TestimonialSlider from '../ui/testimonial-slider';
import MaxWidthWrapper from '../shared/max-width-wrapper';
import TestimonialSliderMobile from '../ui/testimonial-slider-mobile';

function TestimonialSection() {
  return (
    <section className='py-10'>
      <MaxWidthWrapper>
        <div className='flex flex-col gap-2 my-10 md:my-16 lg:my-20 text-center'>
          <h2 className='text-2xl lg:text-4xl font-bold'>What People Say</h2>
          <p className='lg:text-lg'>
            Discover what our students have to say about their experience
          </p>
        </div>
        <TestimonialSlider />
        <TestimonialSliderMobile />
      </MaxWidthWrapper>
    </section>
  );
}

export default TestimonialSection;
