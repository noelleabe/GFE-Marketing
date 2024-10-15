import React from "react";
import Card from "../Card";
import CardHeader from "../CardHeader";
import CardContent from "../CardContent";
import Image, { StaticImageData } from "next/image";
import Link from "../Link";
import CardIconFooter from "../CardIconFooter";

interface IProfileCardProps {
  description: string;
  fullName: string;
  imageAlt: string;
  imageSrc: StaticImageData;
  title: string;
}

function ProfileCard({
  description,
  fullName,
  imageAlt,
  imageSrc,
  title,
}: IProfileCardProps) {
  return (
    <Card>
      <div className="text-center">
        <CardHeader>
          <Image src={imageSrc} alt={imageAlt} className="mx-auto mb-4" />
          <p className="font-semibold text-xl">{fullName}</p>
          <p className="text-sm">{title}</p>
        </CardHeader>
        <CardContent>
          <p className="mb-12">{description}</p>
          <Link to="mailto:" variant="button">
            Contact me
          </Link>
        </CardContent>
        <CardIconFooter />
      </div>
    </Card>
  );
}

export default ProfileCard;
