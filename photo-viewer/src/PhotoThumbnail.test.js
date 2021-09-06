import { render, waitFor } from "@testing-library/react"; // for DOM testing
import PhotoThumbnail from "./PhotoThumbnail";

const props = {
  url: "https://picsum.photos/id/600/1600/900.jpg",
  i: 5,
  onSelectThumbnail: id => id + 1,
  selectedThumbnail: 1,
};

const props2 = {
  url: "https://picsum.photos/id/600/1600/900.jpg",
  i: 5,
  onSelectThumbnail: id => id + 1,
  selectedThumbnail: 5,
};

describe("Photo Thumbnail", () => {
  it("Should render without error", () => {
    render(<PhotoThumbnail props={props} />);
  });

  it("Should have class grid-img when selectedThumbnail !== id", async () => {
    const { container } = render(<PhotoThumbnail props={props} />);
    expect(container.firstChild).toHaveClass("grid-img");
  });
});
