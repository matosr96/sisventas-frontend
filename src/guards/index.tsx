//import { useSelector } from "react-redux";
//import { Navigate, Outlet } from "react-router-dom";
//import { PrivateRoutes, PublicRoutes } from "../constants-definitions/Routes";
//import { AppStore } from "../redux/store";
//
//interface Props {
//  privateValidation: boolean;
//}
//
//const PrivateValidationFragment = <Outlet />;
//const PublicValidationFragment = (
//  <Navigate replace to={PrivateRoutes.PRIVATE} />
//);
//
//const GuardRoute = ({ privateValidation }: Props) => {
//  const { token } = useSelector((store: AppStore) => store.token);
//
//  const isValidToken = verificarToken(token);
//
//  return isValidToken ? (
//    privateValidation ? (
//      PrivateValidationFragment
//    ) : (
//      PublicValidationFragment
//    )
//  ) : (
//    <Navigate replace to={PublicRoutes.LOGIN} />
//  );
//};
//
//const verificarToken = (token: string | null): boolean => {
//  // Aquí puedes implementar la lógica para verificar si el token es válido
//  // Puedes verificar la fecha de expiración del token o cualquier otra lógica personalizada
//
//  // Devuelve true si el token es válido, de lo contrario devuelve false
//  return token !== null;
//};
//
//export default GuardRoute;


export default {}