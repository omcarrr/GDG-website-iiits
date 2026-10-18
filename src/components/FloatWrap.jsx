import { useFloat } from "../hooks/useFloat";

// Wrapper so list items can each get their own float without a hook-per-map.
export default function FloatWrap({ as: Tag = "div", float, className = "", children, ...rest }) {
  const ref = useFloat(float);
  return <Tag ref={ref} className={className} {...rest}>{children}</Tag>;
}
