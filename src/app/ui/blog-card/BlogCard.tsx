import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import Image, { StaticImageData } from "next/image";
import Card from "../common/Card";
import Description from "../common/Description";
import Chip from "../common/Chip";
import Link from "../common/Link";

interface IBlogCardProps {
  chipText?: string;
  description?: string;
  imageSrc?: StaticImageData;
  title?: string;
  to?: string;
}
function BlogCard({
  chipText,
  description,
  imageSrc,
  title,
  to,
}: IBlogCardProps) {
  return (
    <Card>
      {!!imageSrc && (
        <Image
          src={imageSrc}
          alt="a comfortable living room containing a couch, overhead lights, a coffee table, two chairs, and house plants next to a window"
        />
      )}
      <Description>
        {!!chipText && (
          <div className="mb-2">
            <Chip text={chipText} />
          </div>
        )}
        {!!title && <div className="text-lg font-semibold mb-2">{title}</div>}
        {!!description && <p className="mb-4">{description}</p>}
        {!!to && (
          <Link rightIcon={<RiArrowRightLine />} to={to}>
            Read more
          </Link>
        )}
      </Description>
    </Card>
  );
}

export default BlogCard;
