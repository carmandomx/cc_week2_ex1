const { merged } = require('../exercise');
const fs = require('fs');
const path = require('path');

const helper = __dirname.split('/');

helper.pop();
const filepath = path.resolve(helper.join('/'), 'exercise.js');
let file;

beforeAll( async() => {

     file = await fs.promises.readFile(filepath, 'utf-8')
 
 })
test('Testing the merged exercise', () => { 
    expect(merged([], [])).toBeDefined();
    expect(merged([1,2,4], [1,3,4])).toEqual([1,1,2,3,4,4])
    expect(merged([2,3,4], [3,5,7])).toEqual([2,3,3,4,5,7])
    expect(merged([], [0])).toEqual([0])
    expect(!file.match(/\.\s*sort\s*\(/) && !file.match(/\.\s*reduce\s*\(/)).toBe(true)
 })