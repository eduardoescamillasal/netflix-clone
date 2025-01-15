import { ProfilesProps } from "./Profiles.types";

export function Profiles(props: ProfilesProps) {
  const { users } = props;
  console.log({ users });
  return <div>Profiles</div>;
}
