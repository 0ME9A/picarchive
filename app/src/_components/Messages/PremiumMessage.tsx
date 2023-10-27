import BasicLink from "../Links/BasicLink";
import React from "react";

function PremiumMessage({ redirectUrl }: { redirectUrl: string }) {
  return (
    <article className="mx-auto my-5 w-full space-y-2 px-5 xl:container">
      <h2 className="text-2xl font-bold text-blue-400 lg:text-3xl">
        Important Notice: Premium Photos Not Available
      </h2>

      <p className="py-5">Dear Valued Visitor,</p>

      <p>
        We hope you&rsquo;re enjoying your experience on our website, where we
        strive to provide you with a curated selection of high-quality,
        camera-clicked photos sourced from Unsplash&rsquo;s vast library. Our
        mission is to offer you the best visual content for your creative
        projects.
      </p>

      <p>
        However, we wanted to make you aware that not all photos on Unsplash are
        available on our website. Unsplash offers a range of premium photos,
        which are not accessible through our platform. These premium photos are
        exclusively available on Unsplash.com.
      </p>

      <p>
        If you&rsquo;re interested in exploring and accessing the premium photos
        on Unsplash, we encourage you to visit their official website at{" "}
        <BasicLink
          props={{
            href: redirectUrl || "https://unsplash.com",
            title: "unsplash",
            text: "unsplash.com",
            target: "_blank",
            rel: "external",
            style: "!px-0",
          }}
        />
        . There, you&rsquo;ll find a wide array of stunning premium photos that
        might be just what you&rsquo;re looking for.
      </p>

      <p>
        Rest assured that we are continuously working to enhance your experience
        on our website, and we appreciate your support and understanding
        regarding the availability of premium content.
      </p>

      <p>
        Thank you for being a part of our community, and if you have any
        questions or need assistance with anything else, please feel free to
        reach out to us. We&rsquo;re here to help.
      </p>

      <p className="py-5">Warm regards,</p>

      <p>
        <em>Picarchive</em> Team
      </p>
    </article>
  );
}

export default PremiumMessage;
