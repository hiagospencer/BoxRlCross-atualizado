function index({title, description = ''}) {
    document.title = `CROSS TRAINING | ${title}`
    document.querySelector('[name=description]')?.setAttribute('content', description)
  return null
}

export default index
