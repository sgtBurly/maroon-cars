import styles from '../styles/NoSearchResult.module.css'

const NoSearchResult = () => {
  return (
    <div className={styles.nosearchContainer}>
      <h1>No results... Try again!</h1>
      <div>
        <h2>But here are some cars we think you'll like:</h2>
        
      </div>
    </div>
  );
}

export default NoSearchResult;