import { useCallback, useContext } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

import SearchBar from "@/components/SearchBar/SearchBar";
import classes from "./NavBar.module.scss";
import AuthContext from "@/context/AuthContext/AuthContext";
import AppButton from "../AppButton/AppButton";
import { useSelector } from "react-redux";

function NavBar() {
  const pathName = usePathname();
  const router = useRouter();
  const { authToken, setAuthToken } = useContext(AuthContext);

  const { items } = useSelector((st) => st);

  const TITLES = {
    login: "Sign In",
    signup: "Sign Up",
  };

  const shouldHighlight = useCallback(
    (action) => pathName === `/${action}`,
    [pathName]
  );

  const handleLogoutClick = () => {
    setAuthToken(null);
    router.replace("/");
  };

  const Logout = () => {
    return (
      <AppButton
        title="Logout"
        onClick={handleLogoutClick}
        containerStyles={{ marginTop: "0" }}
      />
    );
  };

  const AuthButton = ({ action }) => {
    // console.log({ action });
    return (
      <Link
        href={`/${action}`}
        className={`${classes.signInBox} ${
          shouldHighlight(action) && classes.highlight
        }`}
      >
        {action === "login" ? (
          <LoginIcon className={classes.authIcons} />
        ) : (
          <PersonAddAltIcon className={classes.authIcons} />
        )}

        <span className={classes.signInText}>{TITLES[action]}</span>
      </Link>
    );
  };

  return (
    <div className={classes.mainNavCont}>
      <div className={classes.navBoxContainer}>
        <div className={classes.navBox}>
          <Link href={"/"} className={classes.logoLink}>
            <ShoppingIcon className={classes.logoIcon} />
            <span>E-Mart</span>
          </Link>
          <SearchBar />

          <div className={classes.authActionsBox}>
            {authToken ? (
              <Logout />
            ) : (
              <>
                <AuthButton action="login" />
                <AuthButton action="signup" />
              </>
            )}
          </div>

          <Link href={"/cart"} className={classes.cartCont}>
            <div className={classes.cartIconCont}>
              <span className={classes.countCont}>{items.length}</span>
              <ShoppingCartCheckoutIcon className={classes.cartIcon} />
            </div>
            <span className={classes.cartText}>Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
