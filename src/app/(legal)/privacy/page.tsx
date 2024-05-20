import { Lock } from '@/components/Icons';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy'
}

function Privacy() {
  return (
    <>
      <div className='max-w-[90rem] mx-auto grid content-center gap-6 lg:gap-8 p-6 md:px-8 lg:py-40 lg:px-24'>
        <Lock />
        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-accent'>
          Privacy Policy
        </h1>
        <p className='font-medium md:text-lg lg:text-2xl lg:max-w-screen-lg text-accent'>
          Geotech4All requires some of your information which are necessary for
          the performance of our obligations towards you and providing you with
          our services. When you use our services, you consent to the
          collection, storage, use, disclosure and other uses of your
          Information as described in this Privacy Policy.
        </p>
      </div>
      <section className=' grid gap-6 lg:gap-8 p-6 md:px-8 lg:px-24'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-accent'>
            Information We Collect
          </h2>
          <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
            We collect “Non-Personal Information” and “Personal Information.”
            Non-Personal Information includes information that cannot be used to
            personally identify you, such as anonymous usage data, general
            demographic information we may collect, referring/exit pages and
            URLs, platform types, preferences you submit and preferences that
            are generated based on the data you submit and number of clicks.
            Personal Information includes your email which you submit to us when
            subscribing to our newsletter.
          </p>
        </div>
      </section>
      <section className=' grid gap-6 lg:gap-8 p-6 md:px-8 lg:px-24'>
        <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-accent'>
          How we use and share information
        </h2>
        <strong>Children&apos;s Privacy:</strong>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          The Site and the Service are not directed to anyone under the age of
          13. The Site does not knowingly collect or solicit information from
          anyone under the age of 13, or allow anyone under the age of 13 to
          sign up for the Service. In the event that we learn that we have
          gathered personal information from anyone under the age of 13 without
          the consent of a parent or guardian, we will delete that information
          as soon as possible. If you believe we have collected such
          information, please contact us at [gotechforall@gmail.com].
        </p>
        <strong>Personal Information:</strong>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          Except as otherwise stated in this Privacy Policy, we do not sell,
          trade, rent or otherwise share for marketing purposes your Personal
          Information with third parties without your consent. We do share
          Personal Information with vendors who are performing services for the
          Company, such as the servers for our email communications who are
          provided access to user’s email address for purposes of sending emails
          from us. Those vendors use your Personal Information only at our
          direction and in accordance with our Privacy Policy.
        </p>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          In general, the Personal Information you provide to us is used to help
          us communicate with you. For example, we use Personal Information to
          contact users in response to questions, solicit feedback from users,
          provide technical support, and inform users about promotional offers.
        </p>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          We may share Personal Information with outside parties if we have a
          good-faith belief that access, use, preservation or disclosure of the
          information is reasonably necessary to meet any applicable legal
          process or enforceable governmental request; to enforce applicable
          Terms of Service, including investigation of potential violations;
          address fraud, security or technical concerns; or to protect against
          harm to the rights, property, or safety of our users or the public as
          required or permitted by law.
        </p>

        <strong>Non-Personal Information:</strong>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          n general, we use Non-Personal Information to help us improve the
          Service and customize the user experience. We also aggregate
          Non-Personal Information in order to track trends and analyze use
          patterns on the Site. This Privacy Policy does not limit in any way
          our use or disclosure of Non-Personal Information and we reserve the
          right to use and disclose such Non-Personal Information to our
          partners, advertisers and other third parties at our discretion.
        </p>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          In the event we undergo a business transaction such as a merger,
          acquisition by another company, or sale of all or a portion of our
          assets, your Personal Information may be among the assets transferred.
          You acknowledge and consent that such transfers may occur and are
          permitted by this Privacy Policy, and that any acquirer of our assets
          may continue to process your Personal Information as set forth in this
          Privacy Policy. If our information practices change at any time in the
          future, we will post the policy changes to the Site so that you may
          opt out of the new information practices. We suggest that you check
          the Site periodically if you are concerned about how your information
          is used.
        </p>
      </section>
      <section className=' grid gap-6 lg:gap-8 p-6 md:px-8 lg:px-24'>
        <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-accent'>
          Information Security
        </h2>
        <strong>Users:</strong>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          Whatever information you choose to provide will be treated with utmost
          importance and we will strive to use commercially acceptable means to
          protect. However, no method of transmission over the internet or
          electronic storage is 100% secure and we cannot guarantee its absolute
          security. By using our Service, you acknowledge that you understand
          and agree to assume these risks.
        </p>
      </section>
      <section className=' grid gap-6 lg:gap-8 p-6 md:px-8 lg:px-24'>
        <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-accent'>
          Your Rights
        </h2>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          You have the right at any time to prevent us from contacting you for
          marketing purposes. When we send a promotional communication to a
          user, the user can opt out of further promotional communications by
          following the unsubscribe instructions provided in each promotional
          e-mail. You can also indicate that you do not wish to receive
          marketing communications from us by checking the approriate boxes
          whenever you submit a form on the Site .
        </p>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          Please note that notwithstanding the promotional preferences you
          indicate by either unsubscribing or opting out in the [location of
          opt-out page] of the Site, we may continue to send you administrative
          emails including, for example, periodic updates to our Privacy Policy.
        </p>
      </section>
      <section className=' grid gap-6 lg:gap-8 p-6 md:px-8 lg:px-24'>
        <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-accent'>
          Changes To Our Privacy Policy
        </h2>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          The Company reserves the right to change this policy and our Terms of
          Service at any time. We will notify you of significant changes to our
          Privacy Policy by sending a notice to the primary email address
          specified in your account or by placing a prominent notice on our
          site. Significant changes will go into effect 30 days following such
          notification. Non-material changes or clarifications will take effect
          immediately. You should periodically check the Site and this privacy
          page for updates.
        </p>
      </section>
      <section className=' grid gap-6 lg:gap-8 p-6 md:px-8 lg:px-24 lg:pb-24'>
        <h2 className='text-lg md:text-xl lg:text-3xl font-bold text-accent'>
          Contact Us
        </h2>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          If you have any questions regarding this Privacy Policy or the
          practices of this Site, please contact us by sending an email to
          [geotechforall@gmail.com].
        </p>
        <strong>Last Updated:</strong>
        <p className='font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-accent'>
          This Privacy Policy was last updated on 1<sup>st</sup>, April, 2024.
        </p>
      </section>
    </>
  );
}

export default Privacy;
