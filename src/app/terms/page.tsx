import { Contract } from '@/components/Icons';
import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms'
}

function Terms() {
  return (
    <>
      <div className='max-w-[90rem] mx-auto grid content-center gap-6 lg:gap-8 p-6 md:px-8 lg:py-32 lg:px-24'>
        <Contract />
        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-accent'>
          Terms & Conditions
        </h1>
        <p className='font-medium md:text-lg lg:text-2xl lg:max-w-screen-lg text-accent'>
          Welcome to Geotech4All! These Terms of Service &quot;Terms&quot;
          govern your access and use of the Geotech4All website and any related
          services offered by Geotech4All collectively, the
          &quot;Service&quot;.
        </p>
        <p className='font-medium md:text-lg lg:text-2xl lg:max-w-screen-lg text-accent'>
          Please review the following terms carefully. By accessing or using the
          Service, you signify your agreement to these Terms of Use. If you do
          not agree to be bound by these Terms of Use in their entirety, you may
          not access or use the Service.
        </p>
      </div>
      <section className=' grid gap-6 lg:gap-8 p-6 md:px-8 lg:px-24'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-accent'>
            Privacy Policy
          </h2>
          <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
            The Company respects the privacy of its Service users. Please refer
            to the Company’s Privacy Policy (found{' '}
            <Link href='/privacy' className='underline'>
              here
            </Link>{' '}
            ) which explains how we collect, use, and disclose information that
            pertains to your privacy. When you access or use the Service, you
            signify your agreement to the Privacy Policy as well as these Terms
            of Use.
          </p>
        </div>
      </section>
      <section className=' grid gap-6 lg:gap-8 p-6 md:px-8 lg:px-24'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-accent'>
            User Content
          </h2>
          <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
            You may create, post, and upload certain content (&quot;User
            Content&quot;) to the Service. You retain all ownership rights in
            your User Content. However, by posting User Content to the Service,
            you grant [Geotech4All] a non-exclusive, royalty-free, worldwide
            license to use, modify, publish, or translate your User Content for
            the sole purpose of providing and improving the Service.
          </p>
        </div>
      </section>
      <section className=' grid gap-6 lg:gap-8 p-6 md:px-8 lg:px-24'>
        <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-accent'>
          Governing Law
        </h2>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          These Terms shall be governed and construed in accordance with the
          laws of the Federal Republic of Nigeria, without regard to its
          conflict of law provisions.
        </p>
      </section>
      <section className=' grid gap-6 lg:gap-8 p-6 md:px-8 lg:px-24'>
        <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-accent'>
          Use Restrictions
        </h2>
        <p className=' font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          Your permission to use the Site is conditioned upon the following use,
          posting and conduct restrictions:{' '}
        </p>
        <p className=' font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          You agree that you will not under any circumstances:
        </p>
        <ul className='list-disc pl-8 font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          <li>
            access the Service for any reason other than your personal,
            non-commercial use solely as permitted by the normal functionality
            of the Service,
          </li>
          <li>
            use the Service for any unlawful purpose or for the promotion of
            illegal activities;
          </li>
          <li>attempt to, or harass, abuse or harm another person or group;</li>
          <li>
            publish or link to malicious content of any sort, including that
            intended to damage or disrupt another user’s browser or computer.
          </li>
        </ul>
      </section>
      <section className=' grid gap-6 lg:gap-8 p-6 md:px-8 lg:px-24'>
        <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-accent'>
          Links To Other Sites And/Or Materials
        </h2>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          As part of the Service, we may provide you with convenient links to
          third party website(s) (“Third Party Sites”) as well as content or
          items belonging to or originating from third parties (the “Third Party
          Applications, Software or Content”). These links are provided as a
          courtesy to Service subscribers. We have no control over Third Party
          Sites or Third Party Applications, Software or Content or the
          promotions, materials, information, goods or services available on
          these Third Party Sites or Third Party Applications, Software or
          Content. Such Third Party Sites and Third Party Applications, Software
          or Content are not investigated, monitored or checked for accuracy,
          appropriateness, or completeness, and we are not responsible for any
          Third Party Sites accessed through the Site or any Third Party
          Applications, Software or Content posted on, available through or
          installed from the Site, including the content, accuracy,
          offensiveness, opinions, reliability, privacy practices or other
          policies of or contained in the Third Party Sites or the Third Party
          Applications, Software or Content. Inclusion of, linking to or
          permitting the use or installation of any Third Party Site or any
          Third Party Applications, Software or Content does not imply our
          approval or endorsement.
        </p>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          If you decide to leave the Site and access the Third Party Sites or to
          use or install any Third Party Applications, Software or Content, you
          do so at your own risk and you should be aware that our terms and
          policies, including these Terms of Use, no longer govern. You should
          review the applicable terms and policies, including privacy and data
          gathering practices, of any Third Party Site to which you navigate
          from the Site or relating to any applications you use or install from
          the Third Party Site.
        </p>
      </section>
      <section className=' grid gap-6 lg:gap-8 p-6 md:px-8 lg:px-24'>
        <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-accent'>
          Modification of Our Terms
        </h2>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          We can amend these Terms of Use at any time and will update these
          Terms of Use in the event of any such amendments. It is your sole
          responsibility to check the Site from time to time to view any such
          changes in this agreement. Your continued use of the Site or the
          Service signifies your agreement to our revisions to these Terms of
          Use. We will endeavor to notify you of material changes to the Terms
          by posting a notice on our homepage and/or sending an email to the
          email address you provided to us upon registration. For this
          additional reason, you should keep your contact and profile
          information current. Any changes to these Terms (other than as set
          forth in this paragraph) or waiver of our rights hereunder shall not
          be valid or effective except in a written agreement bearing the
          physical signature of one of our officers. No purported waiver or
          modification of this agreement on our part via telephonic or email
          communications shall be valid.
        </p>
      </section>
      <section className=' grid gap-6 lg:gap-8 p-6 md:px-8 lg:px-24 lg:pb-24'>
        <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-accent'>
          General Terms
        </h2>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          If any part of this Terms of Use agreement is held or found to be
          invalid or unenforceable, that portion of the agreement will be
          construed as to be consistent with applicable law while the remaining
          portions of the agreement will remain in full force and effect. Any
          failure on our part to enforce any provision of this agreement will
          not be considered a waiver of our right to enforce such provision. Our
          rights under this agreement survive any transfer or termination of
          this agreement.
        </p>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          You agree that any cause of action related to or arising out of your
          relationship with the Company must commence within ONE year after the
          cause of action accrues. Otherwise, such cause of action is
          permanently barred.
        </p>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          These Terms of Use and your use of the Site are governed by the laws
          of the federal republic of Nigeria, without regard to conflict of law
          provisions.
        </p>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          We may assign or delegate these Terms of Service and/or our Privacy
          Policy, in whole or in part, to any person or entity at any time with
          or without your consent. You may not assign or delegate any rights or
          obligations under the Terms of Service or Privacy Policy without our
          prior written consent, and any unauthorized assignment or delegation
          by you is void.
        </p>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent uppercase'>
          YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF USE, UNDERSTAND THE
          TERMS OF USE, AND WILL BE BOUND BY THESE TERMS AND CONDITIONS. YOU
          FURTHER ACKNOWLEDGE THAT THESE TERMS OF USE TOGETHER WITH THE PRIVACY
          POLICY AT{' '}
          <Link href='/privacy' className='underline'>
            our privacy policy
          </Link>{' '}
          REPRESENT THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT
          BETWEEN US AND THAT IT SUPERSEDES ANY PROPOSAL OR PRIOR AGREEMENT ORAL
          OR WRITTEN, AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO THE
          SUBJECT MATTER OF THIS AGREEMENT.
        </p>
        <strong>Last Updated:</strong>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          The Terms and Conditions were last updated on 1<sup>st</sup>, April,
          2024.
        </p>
      </section>
    </>
  );
}

export default Terms;
