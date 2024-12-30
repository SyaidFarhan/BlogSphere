import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line react/prop-types
export default function Card({ image, category, title, authorName, authorImage, date, onClick }) {
  // Format the date to "11 August, 2024"
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

  return (
    <div
      className="shadow-sm card card-hover"
      style={{ borderRadius: "12px", cursor: "pointer" }}
      onClick={onClick}
    >
      <img
        src={image}
        alt="Post"
        className="card-img-top"
        style={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        {/* Category badge below the image, above the title */}
        <div className="mb-2">
          <span className="badge bg-light text-primary">{category}</span>
        </div>

        {/* Title */}
        <h5
          className="card-title"
          style={{
            whiteSpace: "nowrap", // Prevent text from wrapping
            overflow: "hidden",   // Hide overflowing text
            textOverflow: "ellipsis", // Add ellipsis for overflow text
          }}
        >
          {title}
        </h5>

        <div className="mt-3 d-flex align-items-center">
          <img
            src={authorImage}
            alt="Author"
            className="rounded-circle me-2"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <span className="fw-bold">{authorName}</span>
            <br />
            <small className="text-muted">{formattedDate}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
