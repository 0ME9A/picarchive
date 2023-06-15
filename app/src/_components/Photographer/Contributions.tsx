import { BsFillFolderFill, BsHeartFill } from "react-icons/bs";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { useState } from "react";
import ProfileFace from "../../_types/ProfileFace";
import BasicBtn from "../Btns/BasicBtn";
import Collections from "./Collections";
import NoRecord from "../../NoRecord";
import Loading from "../Loading";
import Photos from "./Photos";
import Likes from "./Likes";

export default function Contributions({ contributions }: { contributions: ProfileFace | null }) {
  const [tab, setTab] = useState('photos');

  if (!contributions) {
    return <Loading />;
  }

  const renderContent = () => {
    switch (tab) {
      case 'likes':
        return contributions.total_likes > 0 ? (
          <Likes username={contributions.username} />
        ) : (
          <NoRecord />
        );
      case 'photos':
        return contributions.total_photos > 0 ? (
          <Photos username={contributions.username} />
        ) : (
          <NoRecord />
        );
      case 'collections':
        return contributions.total_collections > 0 ? (
          <Collections username={contributions.username} />
        ) : (
          <NoRecord />
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full">
      <header className="sticky top-14 z-10 bg-lighter dark:bg-darker">
        <ul className="flex text-xs sm:text-sm md:text-base border-b border-neutral-500/20">
          <li>
            <BasicBtn
              props={{
                title: 'Photos',
                text: false,
                style: `border-b-2 border-transparent hover:border-gray-500/50 flex gap-2 items-center py-2 !px-3 !no-underline opacity-50 ${
                  tab === 'photos' && '!border-gray-500 !opacity-100'
                }`,
                value: 'photos',
                funCall: setTab,
              }}
            >
              <MdPhotoSizeSelectActual />
              Photos {contributions.total_photos}
            </BasicBtn>
          </li>
          <li>
            <BasicBtn
              props={{
                title: 'Likes',
                text: false,
                style: `border-b-2 border-transparent hover:border-gray-500/50 flex gap-2 items-center py-2 !px-3 !no-underline opacity-50 ${
                  tab === 'likes' && '!border-gray-500 !opacity-100'
                }`,
                value: 'likes',
                funCall: setTab,
              }}
            >
              <BsHeartFill />
              Likes {contributions.total_likes}
            </BasicBtn>
          </li>
          <li>
            <BasicBtn
              props={{
                title: 'Collections',
                text: false,
                style: `border-b-2 border-transparent hover:border-gray-500/50 flex gap-2 items-center py-2 !px-3 !no-underline opacity-50 ${
                  tab === 'collections' && '!border-gray-500 opacity-100'
                }`,
                value: 'collections',
                funCall: setTab,
              }}
            >
              <BsFillFolderFill />
              Collections {contributions.total_collections}
            </BasicBtn>
          </li>
        </ul>
      </header>
      {renderContent()}
    </section>
  );
}
