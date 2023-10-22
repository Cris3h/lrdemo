export function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    // Aggregate or log render timings...
    console.log( 'onRender function --> ',
    'id ->', id," ",
    'phase ->', phase," ",
    'actualDuration ->', actualDuration," ",
    'baseDuration ->', baseDuration," ",
    'startTime ->', startTime," ",
    'commitTime ->', commitTime," ",
    )
  }