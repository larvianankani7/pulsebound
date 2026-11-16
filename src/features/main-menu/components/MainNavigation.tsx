import { NavigationButton } from "./NavigationButton";
import { NAVIGATION_ITEMS } from "../constants";

export function MainNavigation() {
  return (
    <nav className="mt-8 sm:mt-10 lg:mt-12" aria-label="Main Menu Navigation">
      <ul className="flex flex-col gap-4 sm:gap-4.5 md:gap-5 m-0 p-0">
        {NAVIGATION_ITEMS.map((item, index) => (
          <NavigationButton
            key={item.id}
            label={item.name}
            path={item.path}
            index={index}
          />
        ))}
      </ul>
    </nav>
  );
}
