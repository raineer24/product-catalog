import React from "react";
import PropTypes from "prop-types";


const Card = ({ title, content, footer, onClick }) => {
  return (
    <div className="card" onClick={onClick} style={styles.card}>
      {title && <h2 style={styles.title}>{title}</h2>}
      <div style={styles.content}>{content}</div>
      {footer && <div style={styles.footer}>{footer}</div>}
    </div>
  );
};

// Define Proptypes
Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.node.isRequired,
    footer: PropTypes.node,
    onClick: PropTypes.func,
};

// Default Props,
Card.defaultProps = {
    title: '',
    footer: null,
    onClick: () => {}
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
  title: {
    marginBottom: "12px",
    fontSize: "1.2rem",
  },
  content: {
    fontSize: "1rem",
  },
  footer: {
    marginTop: "16px",
    fontSize: "0.9rem",
    color: "#666",
  },
};

export default Card;
