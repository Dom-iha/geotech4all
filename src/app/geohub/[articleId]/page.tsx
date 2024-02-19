import Image from 'next/image';
import data from '../../../../public/data/data.json';
import Related from '@/components/ui/Related';

interface Article {
  id: string;
  title: string;
  author: string;
  createdAt: string;
  cover: string;
  content: string;
}

function page({ params }: { params: { articleId: string } }) {

  const articleToShow: Article | undefined = data.articles.find(
    (article) => article.id === params.articleId
  );

  const coverSrc = articleToShow?.cover || '';

  return (
    <>
      <article className='max-w-screen-md mx-auto py-6 px-4 lg:px-8 flex flex-col gap-8 lg:gap-10'>
        <Image
          src={coverSrc}
          alt=''
          className='w-full'
          width={500}
          height={200}
        />
        <h1 className='text-2xl lg:text-4xl font-bold'>
          {articleToShow?.title}
        </h1>
        <div className='flex gap-8 items-center'>
          <div className='w-16 h-16 bg-accent rounded-full'></div>
          <div className='flex flex-col'>
            <h2 className='font-medium'>{articleToShow?.author}</h2>
            <p className='font-semibold'>{articleToShow?.createdAt}</p>
          </div>
        </div>
        <div className='text-sm lg:text-xl'>
          <p className='mb-5'>
            Before you read this article, readers discretion is advised. This is
            not to steer up another round of argument about an unfathomable
            origin of humans. You have the right to hold your views even though
            it is not in sync with what&apos;s being shared here. Know that, You
            are 100% as wrong as you 100% believe you are right! The difference
            between right and wrong is a function of perspective.
          </p>
          <p className='mb-5'>
            Now, What do you think an agnostic would tell you about God and the
            exact origin of life? Many times as humans we tend to find comfort
            in whatever soothes our curiosity. millions are devilish, some are
            good and few are best for the eternal rest of the soul. The task is
            yours to find out. Do hold this at the back of your mind, Science is
            only here to give logical reasons to God&apos;s unsearchable origins
            and to discover ideas that could help develop our world - At least
            that would help keep their pride but it definitely won&apos;t buy
            them his heart. If you want to develop your mind and find an eternal
            rest for your wandering soul, you better find it somewhere else. But
            for the next three-four minutes, you can lend your mind to look
            through another perspective of life.
          </p>
          <p className='mb-5'>
            Everyone in the world grew up with one perspective or the other
            about how life on earth developed. A prominent one in pre-historic
            times and medieval ages holds dearly what&apos;s recorded in the
            holy books. and the Lord God formed man of the dust of the ground,
            and breathed into his nostrils the breath of life, and man became a
            living soul. A simple summary of human origin that&apos;s constantly
            being subjected to scrutiny by every scientific believer. It sounds
            foolish and illogical to the ears of those with knowledge! You know,
            it takes a fool to believe that. The free-thinking human mind needs
            a logical reason or an explanation to palm their innate pride of
            being knowledgeable - That was the godlike bait used to lure them
            out of the garden. Well, that is not to doubt the veracity of such
            truth. It&apos;s just about how humans can simply forfeit the past
            and focus on how to take hold of what is more important - To live
            happily and joyfully while we roam in this gated wall - Our body -
            and to find an eternal rest for our peace-seeking soul. One question
            you might ask yourself is, What advantage will the knowledge of the
            origin of humans add to my life? and then to the world? I leave that
            to your answer. The major challenge with humans is our inability to
            put under foot our curiosity engine - The mind - An engine that is
            constantly being ignited by our doubts and our innate godlike quest
            - Sovereignty! This can be said to be the drive of young Charles
            Darwin, who in his early twenties was constantly not satisfied by
            the thoughts and ideas purported at that time. Having grown amid
            Christian beliefs and even attended schools with such teachings, he
            hated their views owing to the fact, he was surrounded by prominent
            researchers and scientists who were mostly freethinkers and
            non-conformists. A favorable environment that set the pace for his
            prominence in the scientific field. Having failed as a medical
            student. He set on a cruise voyage with Robert Fitzroy to collect
            fossils across America in their circumnavigation journey. As a young
            guy with a free-roaming mind who wants a resting place. He got
            seasick and bitten by insects in the evil forests up North. Even
            though the journey looks boring and lonely picking fossils across
            the oceans. His curiosity engine was set loose as he began observing
            the similarities in the fossils he collected. A huge question that
            opts into the thought wheel was, Why would some animals go extinct?
            That question provided enough energy to spur up his idea on
            evolution. Before that, He had read Charles Lyell&apos;s book on the
            Principles of Geology which provided the basis for his acceptance of
            the theory of Gradualism or Uniformitarianism as it is popularly
            known. Having observed hundreds of fossils over 20 years. He came up
            with his revolutionary theory of Evolution - On the origin of
            species by Natural selection A widely accepted thought by the
            scientific world.
          </p>
          <p className='mb-5'>Here is a simple summary of his theory:</p>
          <ul className='list-disc pl-5 mb-5'>
            <li>
              Most organisms produce a large number of offspring that can be
              expected to survive and reproduce
            </li>
            <li>
              The Size of a population remains fairly constant, although there
              may be fluctuations
            </li>
            <li>Individuals within a species usually show variation</li>
            <li>
              Some variations are more favorable to existence in a given
              environment than others
            </li>
          </ul>
          <p>
            From the following observations, he made two deduction 1. All living
            organisms are constantly involved in a struggle for survival 2. In a
            population, those that tend to survive and reproduce are those whose
            variation gives them a competitive advantage over the rest. These
            are the fittest in that they are best adapted to their environment.
            The favorable variations they possess are passed to their offspring.
            Darwin thus identified environmental pressures as the main cause of
            Natural selection. They cause favorable variation to accumulate and
            unfavorable variation to be weeded out over thousands of
            generations. Favorable variation naturally selected by the
            environment accumulates sufficiently to give rise to new species
            from ancestral species Therefore according to Darwin, Natural
            selection acting through environmental pressures is the driving
            force behind evolutionary change. Apt! From a young man who had
            dedicated his mind to the study of fossils. Well his commitment paid
            off as he found some tangible facts to stamp his name in the
            scientific world. But where did the argument of human origin come
            from in all of these theories? I did beseech you to take a little
            time to re-read all of his observations and deductions again. It
            saddens me that many who tend to argue about the origin of humans
            with an agnostic like Darwin were only looking through a lens that
            Darwin wasn&apos;t looking through. There are two sides to this. The
            Agnostic view and the Religious view. We would take up the lens of
            this perspective and look through Darwin&apos;s observations. I
            leave you to have background knowledge of his observations and
            deductions before we conclude. What if Darwin&apos;s was wrong? The
            next part of this article will shield light on those views. Maybe by
            then, you will. come to the true understanding that we, humans, are
            as limited as the perspective through which we view life. Watch out
            for Part two!
          </p>
        </div>
        <div>
          <h3 className='font-bold text-lg lg:text-xl'>Last Updated</h3>
          <p className='font-semibold'>July 2nd, 2024</p>
        </div>
      </article>
      <div className='max-w-screen-md mx-auto pt-6 pb-14 px-4 lg:px-8 flex flex-col gap-8 lg:gap-10'>
        <h3 className='text-2xl font-bold'>Related posts from Geotech4All</h3>
        <ul className='grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))] gap-8'>
          {data.articles.map((article) => (
            <Related
              key={article.id}
              id={article.id}
              title={article.title}
              cover={article.cover}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default page;
