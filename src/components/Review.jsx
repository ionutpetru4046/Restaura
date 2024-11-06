import { REVIEW } from "../constants"

const Review = () => {
  return (
    <section className="container mx-auto mb-8 mt-12" id="review">
        <div className="flex flex-col">
            <p className="mb-10 text-3xl font-light leading-normal 
            tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]">
                {REVIEW.content}
            </p>
        </div>
    </section>
  )
}

export default Review
