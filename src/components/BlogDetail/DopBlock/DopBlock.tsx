import style from "./dopblock.module.scss";
import DopBlockItem from "./DopBlockItem";
import { blogItems } from "../../../data";
import { hashtags } from "../../../data";

const DopBlock = () => {
  return (
    <div className={style.dopblock}>
      <h3 className={style.dopblocktitle}>Recent Article</h3>
      <div className={style.dopblockitems}>
        {blogItems.map((item) => (
          <DopBlockItem key={item.id} {...item} />
        ))}
      </div>
      <h3 className={style.dopblocktitle}>Popular Hashtag</h3>
      <div className={style.hashtags}>
        {hashtags.map((item) => (
          <span key={item.id} className={style.dopblockbeige}>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DopBlock;
