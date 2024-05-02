import styles from './skeleton.module.scss';
import { UISkeletonProps } from './skeleton.props';

const UISkeleton = ({ width, height, radius }: UISkeletonProps) => {
  return (
    <div
      className={styles['ui-skeleton']}
      style={{
        width: width ?? '100%',
        height: height ?? '30px',
        borderRadius: radius ?? '5px',
      }}
    ></div>
  );
};

export { UISkeleton };
